import './style.css';
import Tasks from './modules/TasksClass.js';

const refresh = document.querySelector('.refresh');
const form = document.querySelector('.task-form');
const ul = document.querySelector('.ul');

const tasks = new Tasks(localStorage.getItem('tasksDB'));

const saveTasksToStorage = () => {
	localStorage.setItem('tasksDB', JSON.stringify(tasks.allTasks));
};

const renderTasks = () => {
	ul.innerHTML = '';

	tasks.allTasks
		.sort((a, b) => a.index - b.index)
		.forEach((task) => {
			ul.innerHTML += `<li class="li" id="task-${task.index}">
          <div class="inputs">
              <input type="checkbox" class="check" name="checkTask" ${
								task.completed ? 'checked' : ''
							}>
              <input  class="label input" type="text" value="${
								task.description
							}" readonly>
          </div>
          <div class="input-icons">
          <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" class="drag" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
          <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" class="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          </div>
          </li>`;
		});

	const spin = () => {
		refresh.classList.add('rotate');
		setTimeout(() => refresh.classList.remove('rotate'), 1000);
	};

	if (refresh) {
		refresh.addEventListener('click', spin);
	}

	const allListItems = document.querySelectorAll('li');

	allListItems.forEach((li) => {
		li.addEventListener('click', (e) => {
			const listItem = e.target;
			if (
				listItem.classList.contains('drag') ||
				listItem.classList.contains('check')
			) {
				return;
			}

			allListItems.forEach((listItem) =>
				listItem.classList.remove('active')
			);
			li.classList.add('active');

			const inp = li.querySelector('.input');
			inp.readOnly = false;
			inp.focus();
			inp.setSelectionRange(inp.value.length, inp.value.length);
		});
	});

	document.querySelectorAll('li .input').forEach((inp) => {
		inp.addEventListener('focusout', () => {
			setTimeout(() => {
				inp.parentNode.parentNode.classList.remove('active');
				inp.readOnly = true;
			}, 200);
		});

		inp.addEventListener('input', () => {
			const id = Number(inp.parentNode.parentNode.id.split('-')[1]);
			const newTaskList = tasks.allTasks.find((t) => t.index === id);
			newTaskList.description = inp.value.trim();
			tasks.editTask(newTaskList);
			saveTasksToStorage();
		});
	});

	document.querySelectorAll('li .check').forEach((input) => {
		input.addEventListener('change', () => {
			const taskID = Number(input.parentNode.parentNode.id.split('-')[1]);

			const newTaskList = tasks.allTasks.find((task) => task.index === taskID);

			newTaskList.completed = input.checked;

			tasks.editTask(newTaskList);
			saveTasksToStorage();
		});
	});

	document.querySelectorAll('.delete-icon').forEach((deleteButton) => {
		deleteButton.addEventListener('click', () => {
			const taskID = Number(
				deleteButton.parentNode.parentNode.id.split('-')[1]
			);
			tasks.removeTask(taskID);
			saveTasksToStorage();
			deleteButton.parentNode.parentNode.remove();
		});
	});
};

renderTasks();

const removeAll = document.querySelector('.remove-all');
removeAll.addEventListener('click', () => {
	tasks.clearMarkedTasks();
	saveTasksToStorage();
	renderTasks();
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	tasks.addTask({
		description: form.elements.input.value.trim(),
	});
	saveTasksToStorage();
	form.reset();
	renderTasks();
});
