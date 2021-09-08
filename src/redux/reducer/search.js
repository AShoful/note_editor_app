import { SEARCH_NOTE } from "../actionTypes";

const initialState = "";

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NOTE:
      return action.search;
    default:
      return state;
  }
};
