import { combineReducers } from "redux";
import { notes } from "./notes";
import { search } from "./search";

export const combinedReducer = combineReducers({
  notes,
  search,
});
