import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SEARCH_NOTE,
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

export const updateNote = (id, value) => ({
  type: UPDATE_NOTE,
  id,
  value,
});

// --- action search

export const searchNote = (search) => ({
  type: SEARCH_NOTE,
  search,
});
