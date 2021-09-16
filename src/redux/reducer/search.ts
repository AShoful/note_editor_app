import { SEARCH_NOTE } from "../actionTypes";
import { ActionTypes } from "../types";

const initialState = "";

export const search = (
  state: string = initialState,
  action: ActionTypes
): string => {
  switch (action.type) {
    case SEARCH_NOTE:
      return action.search;
    default:
      return state;
  }
};
