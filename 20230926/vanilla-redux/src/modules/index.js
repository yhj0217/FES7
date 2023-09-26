import goodsReducer from "./goodsReducer";
import stockReducer from "./stockReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});

export default rootReducer;
