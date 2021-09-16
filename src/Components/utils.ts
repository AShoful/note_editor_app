import { INote } from "../redux/types";

export const objectIsEmpty = (obj: any) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const searchInNotes = (notes: INote[], search: string): INote[] =>
  search === "" ? notes : notes.filter((item) => item.title.includes(search));

export const validate = (str: string, right: number, left: number) => {
  return str.length > right && str.length < left ? true : false;
};
