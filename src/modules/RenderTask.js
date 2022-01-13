const ul = document.querySelector('.ul');

const renderTask = (task) => {
  if (task) {
    const li = `<li class="li" id="task-${task.index}">
<div class="inputs">
    <input type="checkbox" class="check" name="checkTask" ${
  task.completed ? 'checked' : ''
}>
    <input type="text" value="${task.description}" class="label input" readonly>
</div>
<div class="input-icons">
<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" class="drag" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" class="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
</div>
</li>`;
    ul.innerHTML += li;
    window.location.reload();
  }
};

renderTask();

export { renderTask as default };
