export default class Tasks {
  constructor(storage) {
    this.allTasks = storage ? JSON.parse(storage) : [];
  }

  addTask(task) {
    task.index = this.allTasks.length + 1;
    task.completed = false;
    this.allTasks.push(task);
  }

  removeTask(index) {
    this.allTasks = this.allTasks.filter((task) => task.index !== index);
    this.allTasks = this.allTasks.map((task) => {
      if (task.index > index) {
        task.index -= 1;
      }
      return task;
    });
  }

  editTask(task) {
    this.allTasks[task.index - 1] = task;
  }

  sort(a, b) {
    this.allTasks[a - 1].index = b;
  }

  clearMarkedTasks() {
    this.allTasks = this.allTasks.sort((a, b) => a.index - b.index);
    this.allTasks = this.allTasks.filter((task) => !task.completed);
    this.allTasks = this.allTasks.map((task, i) => {
      task.index = i + 1;
      return task;
    });
  }
}
