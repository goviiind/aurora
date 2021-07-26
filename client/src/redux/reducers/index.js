import { combineReducers } from "redux";
import emp from "./empReducer";

const rootReducer = combineReducers({
  emp,
});

export default rootReducer;
