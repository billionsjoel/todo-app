function updateTask(allTasks, task) {
  allTasks[task.index - 1] = task;

  document
    .querySelectorAll('li')
    .forEach((elm) => elm.classList.remove('active'));

  localStorage.setItem('addTaskToStorage', JSON.stringify(allTasks));
}

export { updateTask as default };
