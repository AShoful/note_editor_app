import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actionTypes";
import { load } from "redux-localstorage-simple";

const savedNotes = load({ namespace: "note-list" });

const initialState = savedNotes && savedNotes.notes ? savedNotes.notes : [];

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.data];

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
