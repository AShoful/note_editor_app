import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SEARCH_NOTE,
  SELECT_NOTE,
} from "./actionTypes";

// Store
export interface INote {
  id: number;
  title: string;
  description: string;
}

export interface IState {
  notes: INote[];
  search: string;
  select: INote;
}

// type id = number;

// Actions
interface IAddNote {
  type: typeof ADD_NOTE;
  data: INote;
}

interface IUpdateNote {
  type: typeof UPDATE_NOTE;
  data: INote;
  id: number;
}

interface ISelectNote {
  type: typeof SELECT_NOTE;
  select: INote;
}

interface ISearchNote {
  type: typeof SEARCH_NOTE;
  search: string;
}

interface IDeleteNote {
  type: typeof DELETE_NOTE;
  id: number;
}

export type ActionTypes =
  | IAddNote
  | IUpdateNote
  | IDeleteNote
  | ISearchNote
  | ISelectNote;
