import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import { addNote, updateNote, removeNote } from "../../redux/action/action";
import { validate, searchInNotes } from "../utils";
import "./TextFields.css";
import { initialStateSelect } from "../../redux/reducer/select";
import { INote, IState } from "../../redux/types";

const TextFields = () => {
  const select = useSelector((state: IState): INote => state.select);
  const search = useSelector((state: IState): string => state.search);
  const notesInStore = useSelector((state: IState): INote[] => state.notes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([] as INote[]);
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setNotes(searchInNotes(notesInStore, search));
  }, [search, notesInStore]);

  useEffect(() => {
    if (select.id) {
      setTitle(select.title);
      setDescription(select.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [select]);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    select: INote
  ) => {
    e.preventDefault();
    setTouch(false);
    if (!select.id) {
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
        id: select.id,
        title,
        description,
      };
      dispatch(updateNote(select.id, dataUpdate));
    }
  };

  const hamdleRemove = (select: INote) => {
    if (!select.id) {
      return;
    }
    if (notes.length === 1) {
      return dispatch(removeNote(notes[0].id, initialStateSelect, true));
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
            {validate(title, 3, 120) || !touch || (
              <small className="TextFields_small">
                the length TITLE must be between 3 and 120 characters
              </small>
            )}
          </div>
          <span
            className="material-icons delete"
            onClick={() => hamdleRemove(select)}
          >
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
          rows={6}
          onChange={(e) => {
            setDescription(e.target.value);
            if (!touch) setTouch(true);
          }}
          value={description}
        />
        <button
          className="TextFields_button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick(e, select)
          }
          disabled={!validate(description, 5, 500) || !validate(title, 3, 120)}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TextFields;
