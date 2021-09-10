import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import { addNote, updateNote, removeNote } from "../../redux/action/action";
import { objectIsEmpty, validate } from "../functions";
import "./TextFields.css";

const TextFields = () => {
  let select = useSelector((state) => state.select);
  // const search = useSelector((state) => state.search);
  // const notesInStore = useSelector((state) => state.notes);
  const notes = useSelector((state) => state.notes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  // const notes = searchInNotes(notesInStore, search);

  useEffect(() => {
    if (!objectIsEmpty(select)) {
      setTitle(select.title);
      setDescription(select.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [notes, select]);

  const handleSubmit = (e, select) => {
    e.preventDefault();
    if (objectIsEmpty(select)) {
      const dataAdd = {
        id: Date.now(),
        title,
        description,
      };
      dispatch(addNote(dataAdd));
      setTitle("");
      setDescription("");
    } else {
      const dataUpdate = {
        title,
        description,
      };
      dispatch(updateNote(select.id, dataUpdate));
    }
  };

  const hamdleRemove = (select) => {
    if (objectIsEmpty(select)) {
      return;
    }
    const indexSelect = notes.indexOf(select);
    if (notes.length === 1) {
      return dispatch(removeNote(notes[0].id, {}, true));
    }
    if (indexSelect === notes.length - 1) {
      return dispatch(
        removeNote(notes[indexSelect].id, notes[indexSelect - 1], false)
      );
    } else {
      return dispatch(
        removeNote(notes[indexSelect].id, notes[indexSelect + 1], false)
      );
    }
  };

  console.log("newSelect", select);
  console.log("newLeng", notes.length);
  return (
    <div className="TextFields">
      <Search />
      <form
        className="TextFields_form"
        onSubmit={(e) => handleSubmit(e, select)}
      >
        <div className="TextFields_div">
          <p>Title {validate(title, 3, 40) || "error"}</p>
          <span className="material-icons" onClick={() => hamdleRemove(select)}>
            delete
          </span>
        </div>
        <input
          className="TextFields_input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p>Description {validate(description, 3, 150) || "error"}</p>
        <textarea
          className="TextFields_textarea"
          rows="10"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          className="TextFields_button"
          onClick={(e) => handleSubmit(e, select)}
          disabled={
            !validate(description, 3, 120) || !validate(title, 3, 30)
            // objectIsEmpty(select)
          }
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TextFields;
