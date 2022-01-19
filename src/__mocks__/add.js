/* eslint-disable import/no-cycle */
import { saveStorage, getStorage } from './storage.js';
// const { getStorage, saveStorage } = storage;
import populateList from './index.js';

const addNewTask = (input) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: input.value,
  };

  taskList.push(task);

  saveStorage(taskList);
  // input.value = '';
  populateList(taskList);
  return task;
  // if (input.value === '') {
  //   return;
  // }
};

export default addNewTask;
