import { combineReducers } from "redux";
import { notes } from "./notes";
import { search } from "./search";
import { select } from "./select";

export const combinedReducer = combineReducers({
  notes,
  search,
  select,
});
