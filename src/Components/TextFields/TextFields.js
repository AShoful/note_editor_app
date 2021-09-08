import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../redux/action/action";
import "./TextFields.css";

const TextFields = () => {
  const select = useSelector((state) => state.select);
  console.log(select);
  const notes = useSelector((state) => state.notes);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (select >= 0) {
      setDescription(notes[select].title);
      setTitle(notes[select].title);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [notes, select]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title,
      description,
    };
    dispatch(addNote(data));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="TextFields">
      <input className="TextFields_input" type="text" />
      <form className="TextFields_form" onSubmit={handleSubmit}>
        <div className="TextFields_div">
          <p>Title</p>
          <span className="material-icons">delete</span>
        </div>
        <input
          className="TextFields_input"
          type="text"
          // placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p>Description</p>
        <textarea
          className="TextFields_textarea"
          rows="10"
          type="text"
          // placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="TextFields_button" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default TextFields;
