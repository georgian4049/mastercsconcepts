import platformReducer from "./platformReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  platform: platformReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};
export default rootReducer;
