import './style.css';

const ul = document.querySelector('.ul');

const tasks = [
  {
    description: 'Go to the well',
    completed: false,
    index: 3,
  },
  {
    description: 'Do another task',
    completed: true,
    index: 2,
  },
  {
    description: 'Yet another new task',
    completed: false,
    index: 1,
  },
];

function compare(a, b) {
	const taskA = a.index;
	const taskB = b.index;

	let comparison = 0;
	if (taskA > taskB) {
		comparison = 1;
	} else if (taskA < taskB) {
		comparison = -1;
	}
	return comparison;
}


const renderTask = (task) => {
  if (task) {
    const li = `<div class="li"><span><input type="checkbox">${task.description}</span><svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg></div>`;
    ul.innerHTML += li;
  }
};

tasks.sort(compare).map((task) => {
  renderTask(task);
  return task;
});

renderTask();
