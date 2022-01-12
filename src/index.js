import './style.css';
import compare from './modules/Compare.js';
import renderTask from './modules/RenderTask.js';
import addTask from './modules/AddTask.js';
import renderAllTasks from './modules/RenderAllTasks.js';

const refresh = document.querySelector('.refresh');
const pushTaskToDom = document.querySelector('.add-task');
const allTasks = [];

allTasks.sort(compare).map((task) => {
	renderTask(task);
	return task;
});

renderAllTasks();

if (pushTaskToDom) {
	pushTaskToDom.addEventListener('click', addTask);
}

function spin() {
	refresh.classList.add('rotate');
	setTimeout(() => refresh.classList.remove('rotate'), 1000);
}

if (refresh) {
	refresh.addEventListener('click', spin);
}
