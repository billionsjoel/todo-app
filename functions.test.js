import addTask from './src/__mocks__/AddTask.js';

test('calls addTask', () => {
	expect(addTask()).toMatchObject({
		description: 'description',
		completed: false,
		index: 1,
	});
});
