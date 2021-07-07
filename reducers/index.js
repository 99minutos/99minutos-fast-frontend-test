import { combineReducers } from "redux";

import container from "./container.reducer";
import containers from "./containers.reducer";

const rootReducer = combineReducers({
  container,
  containers,
});

export default rootReducer;
