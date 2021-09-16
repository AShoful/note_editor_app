import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actionTypes";
import { load } from "redux-localstorage-simple";
import { ActionTypes, INote } from "../types";

interface ISaveLoad {
  [key: string]: any;
}

const savedNotes: ISaveLoad = load({ namespace: "note-list" });

const initialState: INote[] =
  savedNotes && savedNotes.notes ? savedNotes.notes : [];

export const notes = (
  state: INote[] = initialState,
  action: ActionTypes
): INote[] => {
  switch (action.type) {
    case ADD_NOTE:
      return [action.data, ...state];

    case UPDATE_NOTE: {
      const st = state.filter((item) => item.id === action.id)[0];
      st.title = action.data.title;
      st.description = action.data.description;
      return [...state];
    }

    case DELETE_NOTE:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};
