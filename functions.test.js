import addTask from './src/__mocks__/AddTask.js';
import removeTask from './src/__mocks__/removeTask.js';

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
