const removeAllCompleted = () => {
  let storedTasks = JSON.parse(window.localStorage.getItem('addTaskToStorage')) || [];
  storedTasks = storedTasks.sort((a, b) => a.index - b.index);
  storedTasks = storedTasks.filter((task) => !task.completed);
  storedTasks = storedTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('addTaskToStorage', JSON.stringify(storedTasks));
  window.location.reload();
};

export { removeAllCompleted as default };
