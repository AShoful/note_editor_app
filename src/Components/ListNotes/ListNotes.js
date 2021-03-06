import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectNote, addNote } from "../../redux/action/action";
import { searchInNotes } from "../utils";
import "./ListNotes.css";

const DEFAULT_NOTE = {
  title: "default title",
  description: "default description",
};

const ListNotes = () => {
  const notes = useSelector((state) => state.notes);
  const select = useSelector((state) => state.select);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [sortByTitle, setSortByTitle] = useState(0);
  const [sortByDate, setSortByDate] = useState(0);

  const handleSortByTitle = () => {
    setSortByTitle((prev) => {
      setSortByDate(0);
      return prev ? prev * -1 : 1;
    });
  };

  const handleSortByDate = () => {
    setSortByDate((prev) => {
      setSortByTitle(0);
      return prev ? prev * -1 : 1;
    });
  };

  const notesAfterSearch = searchInNotes(notes, search);

  if (sortByTitle) {
    notesAfterSearch.sort((a, b) => {
      if (a.title < b.title) {
        return sortByTitle;
      } else {
        return sortByTitle * -1;
      }
    });
  }

  if (sortByDate) {
    notesAfterSearch.sort((a, b) => sortByDate * (a.id - b.id));
  }

  const viewSort = (sort) => {
    if (!sort) return null;
    return sort > 0 ? (
      <span className="material-icons">keyboard_arrow_up</span>
    ) : (
      <span className="material-icons">keyboard_arrow_down</span>
    );
  };

  const handleAddNewNote = () => {
    DEFAULT_NOTE.id = Date.now();
    const data = { ...DEFAULT_NOTE };
    dispatch(addNote(data));
    dispatch(selectNote(data));
  };

  return (
    <div className="ListNotes">
      <div className="ListNotes_sortfields">
        <div className="sort" onClick={handleSortByTitle}>
          <span>Title</span> {viewSort(sortByTitle)}
        </div>
        <div className="sort" onClick={handleSortByDate}>
          <span>Date</span> {viewSort(sortByDate)}
        </div>
      </div>
      <button className="ListNotes_button" onClick={handleAddNewNote}>
        + New
      </button>
      <div>
        {notesAfterSearch.map((item) => (
          <div
            key={item.id}
            className={
              item.id !== select.id
                ? "ListNotes_title"
                : "ListNotes_title highlight"
            }
            onClick={() => {
              dispatch(selectNote(item));
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNotes;
