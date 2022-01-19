import Tasks from './src/modules/TasksClass';

const tasks = new Tasks();

test('first element added', () => {
	tasks.addTask({ description: 'First task' });
	expect(tasks.allTasks.length).toBe(1);
});

test('task description passes', () => {
	tasks.addTask({ description: 'New Task' });
	expect(tasks.allTasks[1].description).toBe('New Task');
});
