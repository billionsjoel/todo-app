export default class Tasks {
	constructor(storage) {
		this.list = storage ? JSON.parse(storage) : [];
	}

	add(task) {
		task.index = this.list.length + 1;
		task.completed = false;
		this.list.push(task);
	}

	remove(index) {
		this.list = this.list.filter((task) => task.index !== index);
		this.list = this.list.map((task) => {
			if (task.index > index) {
				task.index -= 1;
			}
			return task;
		});
	}

	edit(task) {
		this.list[task.index - 1] = task;
	}

	sort(oldIndex, newIndex) {
		this.list[oldIndex - 1].index = newIndex;
	}

	clearCompleted() {
		this.list = this.list.sort((a, b) => a.index - b.index);
		this.list = this.list.filter((task) => !task.completed);
		this.list = this.list.map((task, i) => {
			task.index = i + 1;
			return task;
		});
	}
}
