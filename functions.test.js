import addTask from './src/__mocks__/AddTask.js';
import removeTask from './src/__mocks__/removeTask.js';
import renderTask from './src/__mocks__/renderTask.js';

describe('Testing Task operations', () => {
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
    const storedTasks = JSON.parse(
      window.localStorage.getItem('addTaskToStorage'),
    );
    expect(removeTask(storedTasks, 1)).toMatchObject([
      { description: 'task 2', completed: false, index: 1 },
    ]);
  });
});
