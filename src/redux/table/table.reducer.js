const INITIAL_STATE = [];

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      return state.map((elem, i) => {
        if (i !== action.payload.index) return elem;
        return {
          ...elem,
          [action.payload.prop]: action.payload.value,
        };
      });
    case "ADD_TO_LIST":
      return [action.payload, ...state];
    case "REMOVE_FROM_LIST":
      return state.filter((elem, i) => i !== action.payload);
    case "SWIPE_ROWS":
      const siblingEl = state[action.payload.siblingIndex];
      const currentEl = state[action.payload.index];
      return state.map((elem, i) => {
        if (i !== action.payload.siblingIndex && i !== action.payload.index)
          return elem;
        return i === action.payload.index ? siblingEl : currentEl;
      });
    default:
      return state;
  }
};

export default tableReducer;
