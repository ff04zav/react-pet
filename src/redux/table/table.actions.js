import {
  UPDATE_LIST,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  SWIPE_ROWS,
} from "./table.action.types";

export const updateList = (index, prop, value) => ({
  type: UPDATE_LIST,
  payload: { index, prop, value },
});

export const addToList = (item) => ({
  type: ADD_TO_LIST,
  payload: item,
});

export const deleteItem = (index) => ({
  type: REMOVE_FROM_LIST,
  payload: index,
});

export const swipeRows = (siblingIndex, index) => ({
  type: SWIPE_ROWS,
  payload: { siblingIndex, index },
});
const actions = { updateList, addToList, deleteItem, swipeRows };
export default actions;
