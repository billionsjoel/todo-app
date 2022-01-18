import Task from '../modules/TaskClass.js';

const addTask = () => {
	const task = new Task('description', false, 1);
	return task;
};

export { addTask as default };
