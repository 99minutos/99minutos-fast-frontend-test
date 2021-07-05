import { combineReducers } from "redux";

import container from "./container.reducer";

const rootReducer = combineReducers({
  container,
});

export default rootReducer;
