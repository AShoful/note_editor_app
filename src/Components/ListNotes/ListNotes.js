// import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectNote } from "../../redux/action/action";
import Search from "../Search/Search";
import "./ListNotes.css";

const ListNotes = () => {
  const notes = useSelector((state) => state.notes);
  const select = useSelector((state) => state.select);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const notesAfterSearch =
    search === "" ? notes : notes.filter((item) => item.title.includes(search));
  return (
    <div className="ListNotes">
      <div className="ListNotes_sortfields">
        <div>Title </div>
        <div>Date</div>
      </div>
      <button
        className="ListNotes_button"
        disabled={select === -1}
        onClick={() => dispatch(selectNote(-1))}
      >
        + New
      </button>
      <div>
        {notesAfterSearch.map((item, index) => (
          <div
            key={item.id}
            className="ListNotes_title"
            onClick={() => dispatch(selectNote(index))}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNotes;
