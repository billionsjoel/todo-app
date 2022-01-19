const check = (checkbox, item) => {
  if (checkbox.checked) {
    item.completed = true;
  } else {
    item.completed = false;
  }
};

export default check;
