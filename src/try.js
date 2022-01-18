const removeTask = () => {
  const allTasks = [
    { description: 'task 1', completed: false, index: 1 },
    { description: 'task 2', completed: false, index: 2 },
  ];
  const index = 0;

  console.log(allTasks[index].index);

  // allTasks = allTasks.filter((task) => task[2] !== index);
  // const allTasksNew = allTasks.map((task) => {
  //	if (task[1] > index) {
  //		task.index -= 1;
  //	}
  //	return task;
  // });
  // return allTasksNew;
};

// export { removeTask as default };

removeTask();
