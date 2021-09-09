import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectNote } from "../../redux/action/action";
import "./ListNotes.css";

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

  const notesAfterSearch =
    search === "" ? notes : notes.filter((item) => item.title.includes(search));

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

  return (
    <div className="ListNotes">
      <div className="ListNotes_sortfields">
        <div onClick={handleSortByTitle}>Title {viewSort(sortByTitle)}</div>
        <div onClick={handleSortByDate}>Date {viewSort(sortByDate)}</div>
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
            className={
              index !== select ? "ListNotes_title" : "ListNotes_title highlight"
            }
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
