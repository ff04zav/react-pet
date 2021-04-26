const updateList = (index, prop, value) => ({
  type: "UPDATE_LIST",
  payload: { index, prop, value },
});

const addToList = (item) => ({
  type: "ADD_TO_LIST",
  payload: item,
});

const deleteItem = (index) => ({
  type: "REMOVE_FROM_LIST",
  payload: index,
});

const swipeRows = (siblingIndex, index) => ({
  type: "SWIPE_ROWS",
  payload: { siblingIndex, index },
});
const actions = { updateList, addToList, deleteItem, swipeRows };
export default actions;
