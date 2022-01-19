let holder = [];
function saveStorage(items) {
  holder = items;
}
function getStorage() {
  return holder;
}
export { saveStorage, getStorage };
