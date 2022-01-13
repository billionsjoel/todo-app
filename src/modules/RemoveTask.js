const removeTask = (allTasks, index) => {
  allTasks = allTasks.filter((task) => task.index !== index);
  allTasks = allTasks.map((task) => {
    if (task.index > index) {
      task.index -= 1;
    }
    return task;
  });
  localStorage.setItem('addTaskToStorage', JSON.stringify(allTasks));
};

export { removeTask as default };
