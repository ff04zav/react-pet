const INITIAL_STATE = {
  isReady: false,
  data: [],
  message: "",
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isReady: false,
      };
    case "STORE_NEWS":
      return {
        ...state,
        data: action.payload.data,
        isReady: true,
      };
    case "SHOW_ERROR":
      return {
        ...state,
        message: action.payload,
        isReady: true,
      };
    default:
      return state;
  }
};

export default newsReducer;
