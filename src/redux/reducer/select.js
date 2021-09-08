import { SELECT_NOTE } from "../actionTypes";

const initialState = 0;
export const select = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.select;
    default:
      return state;
  }
};
