function updateTask(filteredTask, taskID) {
  filteredTask[taskID.index - 1] = taskID;

  document
    .querySelectorAll('li')
    .forEach((li) => li.classList.remove('active'));

  localStorage.setItem('addTaskToStorage', JSON.stringify(filteredTask));
}

export { updateTask as default };
