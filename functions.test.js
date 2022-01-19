import Tasks from './src/modules/TasksClass.js';

const tasks = new Tasks();

describe('Testing add method ', () => {
  test('first element added', () => {
    tasks.addTask({ description: 'First task added' });
    expect(tasks.allTasks.length).toBe(1);
  });

  test('task description passes', () => {
    tasks.addTask({ description: 'New Task' });
    expect(tasks.allTasks[1].description).toBe('New Task');
  });
});

describe('Testing for delete method', () => {
  test('first element deleted', () => {
    const taskID = 1;
    tasks.removeTask(taskID);
    expect(tasks.allTasks.length).toBe(1);
  });
  test('remove function has been called', () => {
    const taskID = 1;
    const f = jest.fn(tasks.removeTask(taskID));
    expect(f.mock.calls.length).toBe(0);
  });
});
