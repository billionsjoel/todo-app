import './style.css';
import compare from './modules/Compare.js';
import renderTask from './modules/RenderTask.js';
import addTask from './modules/AddTask.js';
import renderAllTasks from './modules/RenderAllTasks.js';
import updateTask from './modules/UpdateTask.js';
import removeTask from './modules/RemoveTask.js';
import removeAllCompleted from './modules/removeAllCompletedTasks.js';

const refresh = document.querySelector('.refresh');
const pushTaskToDom = document.querySelector('.add-task');
const inputField = document.querySelector('.input-field');

const allTasks = [];
let storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];

allTasks.sort(compare).map((task) => {
  renderTask(task);
  return task;
});

renderAllTasks();

if (pushTaskToDom) {
  pushTaskToDom.addEventListener('click', addTask);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
}

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
    const listTarget = e.target;
    if (
      listTarget.classList.contains('drag') || listTarget.classList.contains('check')
    ) {
      return;
    }

    allListItems.forEach((listTarget) => listTarget.classList.remove('active'));
    li.classList.add('active');

    const inputListItem = li.querySelector('.input');
    inputListItem.readOnly = false;
    inputListItem.focus();
    inputListItem.setSelectionRange(
      inputListItem.value.length,
      inputListItem.value.length,
    );
  });
});

document.querySelectorAll('li .input').forEach((input) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const taskID = Number(input.parentNode.parentNode.id.split('-')[1]);
      const filteredTask = storedTasks.find((task) => task.index === taskID);
      filteredTask.description = input.value.trim();
      updateTask(storedTasks, filteredTask);
      input.readOnly = true;
    }
  });
});

document.querySelectorAll('li .check').forEach((input) => {
  input.addEventListener('change', () => {
    const storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];
    const taskID = Number(input.parentNode.parentNode.id.split('-')[1]);

    const filteredTask = storedTasks.find((task) => task.index === taskID);

    filteredTask.completed = input.checked;

    updateTask(storedTasks, filteredTask);
  });
});

document.querySelectorAll('.delete-icon').forEach((deleteButton) => {
  deleteButton.addEventListener('click', () => {
    const id = Number(deleteButton.parentNode.parentNode.id.split('-')[1]);

    removeTask(storedTasks, id);
    storedTasks = JSON.parse(localStorage.getItem('addTaskToStorage'));
    deleteButton.parentNode.parentNode.remove();
  });
});

const removeAll = document.querySelector('.remove-all');
removeAll.addEventListener('click', () => {
  removeAllCompleted();
});
