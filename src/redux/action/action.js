import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SEARCH_NOTE,
  SELECT_NOTE,
} from "../actionTypes";

// --- action notes

export const addNote = (data) => ({
  type: ADD_NOTE,
  data,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id,
});

export const updateNote = (id, data) => ({
  type: UPDATE_NOTE,
  id,
  data,
});

export const removeNote = (id, isEnd, select) => {
  return async (dispatch) => {
    dispatch(deleteNote(id));
    if (isEnd) {
      dispatch(selectNote(select - 1));
    }
  };
};

// --- action search

export const searchNote = (search) => ({
  type: SEARCH_NOTE,
  search,
});

// --- action select

export const selectNote = (select) => ({
  type: SELECT_NOTE,
  select,
});
