const removeTask = () => {
  let allTasks = [
    { description: 'task 1', completed: false, index: 1 },
    { description: 'task 2', completed: false, index: 2 },
  ];
  const index = 1;

  allTasks = allTasks.filter((task) => task.index !== index);
  allTasks = allTasks.map((task) => {
    if (task.index > index) {
      task.index -= 1;
    }
    return task;
  });
  return allTasks;
};

removeTask();
export { removeTask as default };
