import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newsReducer from "./news/news.reducer";
import tableReducer from "./table/table.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["table"],
};

const rootReducer = combineReducers({ table: tableReducer, news: newsReducer });

export default persistReducer(persistConfig, rootReducer);
