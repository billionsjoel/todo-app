import addTask from './src/__mocks__/AddTask.js';
import removeTask from './src/__mocks__/removeTask.js';
import renderTask from './src/__mocks__/renderTask.js';

test('calls addTask', () => {
	expect(addTask()).toMatchObject({
		description: 'description',
		completed: false,
		index: 1,
	});
});

test('calls removeTask', () => {
	expect(removeTask()).toMatchObject([
		{ description: 'task 2', completed: false, index: 1 },
	]);
});

test('Check to add atleast one <li>', () => {
	const ul = document.createElement('ul');
	expect(renderTask(ul)).toBe(true);
});

test('Deleted from DOM', () => {
  const storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage'));
  removeTask(storedTasks, 1);
  const task = localStorage.setItem('addTaskToStorage', JSON.stringify([{ description: 'task 1', completed: false, index: 1 }]));
  expect(task).not.toBeDefined();
});
