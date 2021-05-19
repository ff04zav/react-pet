import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tableReducer from "./table/table.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["table"],
};

const rootReducer = combineReducers({ table: tableReducer });

export default persistReducer(persistConfig, rootReducer);
