import { SELECT_NOTE } from "../actionTypes";
import { ActionTypes, INote } from "../types";

export const initialStateSelect = { id: 0, title: "", description: "" };
export const select = (
  state: INote = initialStateSelect,
  action: ActionTypes
): INote => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.select;
    default:
      return state;
  }
};
