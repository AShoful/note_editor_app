import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import { addNote, updateNote, removeNote } from "../../redux/action/action";
import "./TextFields.css";

const TextFields = () => {
  let select = useSelector((state) => state.select);
  const notes = useSelector((state) => state.notes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (select !== -1) {
      setTitle(notes[select].title);
      setDescription(notes[select].description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [notes, select]);

  const handleSubmit = (e, select) => {
    e.preventDefault();
    if (select === -1) {
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
      dispatch(updateNote(select, dataUpdate));
    }
  };

  const hamdleRemote = (select) => {
    if (select === -1) {
      return;
    }
    let del = notes[select].id;
    dispatch(removeNote(del, select === notes.length - 1, select));
  };

  return (
    <div className="TextFields">
      <Search />
      <form
        className="TextFields_form"
        onSubmit={(e) => handleSubmit(e, select)}
      >
        <div className="TextFields_div">
          <p>Title</p>
          <span className="material-icons" onClick={() => hamdleRemote(select)}>
            delete
          </span>
        </div>
        <input
          className="TextFields_input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p>Description</p>
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
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TextFields;
