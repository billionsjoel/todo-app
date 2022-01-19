import Tasks from './src/modules/TasksClass';

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

test('first element deleted', () => {
	const taskID = 1;
	tasks.removeTask(taskID);
	expect(tasks.allTasks.length).toBe(1);
});
