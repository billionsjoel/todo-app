import Task from './TaskClass.js';
import renderTask from './RenderTask.js';

const storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];
let allTasks = [];

const addTask = () => {
  const form = document.querySelector('.task-form');
  const description = form.elements.task.value;
  const completed = false;
  const index = storedTasks.length + 1;

  const task = new Task(description, completed, index);
  allTasks = storedTasks || [];
  allTasks.push(task);
  localStorage.setItem('addTaskToStorage', JSON.stringify(allTasks));
  form.reset();
  renderTask(task);
};

export { addTask as default };
