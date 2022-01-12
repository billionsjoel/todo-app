import './style.css';
import compare from './modules/Compare.js';
import renderTask from './modules/RenderTask.js';

const tasks = [
  {
    description: 'Go to the well',
    completed: false,
    index: 3,
  },
  {
    description: 'Do another task',
    completed: true,
    index: 1,
  },
  {
    description: 'Yet another new task',
    completed: false,
    index: 2,
  },
];

tasks.sort(compare).map((task) => {
  renderTask(task);
  return task;
});
