import './style.css';
import compare from './modules/Compare.js';
import renderTask from './modules/RenderTask.js';
import addTask from './modules/AddTask.js';
import renderAllTasks from './modules/RenderAllTasks.js';

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
