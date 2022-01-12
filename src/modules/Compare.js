const compare = (a, b) => {
  const taskA = a.index;
  const taskB = b.index;

  let comparison = 0;
  if (taskA > taskB) {
    comparison = 1;
  } else if (taskA < taskB) {
    comparison = -1;
  }
  return comparison;
};

export { compare as default };
