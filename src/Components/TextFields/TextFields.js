import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import { addNote, updateNote, removeNote } from "../../redux/action/action";
import { objectIsEmpty, validate, searchInNotes } from "../functions";
import "./TextFields.css";

const TextFields = () => {
  let select = useSelector((state) => state.select);
  const search = useSelector((state) => state.search);
  const notesInStore = useSelector((state) => state.notes);
  // const notes = useSelector((state) => state.notes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();

  const notes = searchInNotes(notesInStore, search);

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
    setTouch(false);
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
    if (notes.length === 1) {
      return dispatch(removeNote(notes[0].id, {}, true));
    }
    const indexSelect = notes.indexOf(select);
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

  return (
    <div className="TextFields">
      <Search />
      <form className="TextFields_form">
        <div className="TextFields_div">
          <div>
            <p className="TextFields_p">Title</p>
            {validate(title, 3, 120, touch) || !touch || (
              <small className="TextFields_small">
                the length TITLE must be between 3 and 120 characters
              </small>
            )}
          </div>
          <span className="material-icons" onClick={() => hamdleRemove(select)}>
            delete
          </span>
        </div>
        <input
          className="TextFields_input"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
            if (!touch) setTouch(true);
          }}
          value={title}
        />
        <p className="TextFields_p">Description</p>
        {validate(description, 5, 500) || !touch || (
          <small className="TextFields_small">
            the length DESCRIPTION must be between 5 and 500 characters
          </small>
        )}
        <textarea
          className="TextFields_textarea"
          rows="6"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
            if (!touch) setTouch(true);
          }}
          value={description}
        />
        <button
          className="TextFields_button"
          onClick={(e) => handleSubmit(e, select)}
          disabled={
            !validate(description, 5, 500) || !validate(title, 3, 120)
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
