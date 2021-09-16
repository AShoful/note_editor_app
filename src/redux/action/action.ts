import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SEARCH_NOTE,
  SELECT_NOTE,
} from "../actionTypes";

import { ActionTypes, INote } from "../types";
import { Dispatch } from "redux";

// --- action notes

export const addNote = (data: INote): ActionTypes => ({
  type: ADD_NOTE,
  data,
});

export const deleteNote = (id: number): ActionTypes => ({
  type: DELETE_NOTE,
  id,
});

export const updateNote = (id: number, data: INote): ActionTypes => ({
  type: UPDATE_NOTE,
  id,
  data,
});

export const removeNote = (id: number, select: INote, clearSearh: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch(selectNote(select));
    dispatch(deleteNote(id));
    if (clearSearh) {
      dispatch(searchNote(""));
    }
  };
};

// --- action search

export const searchNote = (search: string): ActionTypes => ({
  type: SEARCH_NOTE,
  search,
});

// --- action select

export const selectNote = (select: INote): ActionTypes => ({
  type: SELECT_NOTE,
  select,
});
