export const objectIsEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const searchInNotes = (notes, search) =>
  search === "" ? notes : notes.filter((item) => item.title.includes(search));

export const validate = (str, right, left, touch) => {
  return (str.length > right && str.length < left) || !touch ? true : false;
};
