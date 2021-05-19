import { START_FETCHING, STORE_NEWS, SHOW_ERROR } from "./news.action.types";

export const fetchNews = () => {
  console.log("fetchNews");
  return (dispatch) => {
    console.log("in dispatch");
    dispatch({
      type: START_FETCHING,
    });
    fetch("https://node-js-tass-api.herokuapp.com/json")
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        dispatch({
          type: STORE_NEWS,
          payload: {
            data: resp.rss.channel[0].item,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_ERROR,
          payload: {
            error: error.message,
          },
        });
      });
  };
};
