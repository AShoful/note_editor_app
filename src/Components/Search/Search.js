import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../../redux/action/action";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e, search) => {
    e.preventDefault();
    dispatch(searchNote(search.trim()));
    setSearch("");
  };

  return (
    <div className="Search">
      <form className="Search_form" onSubmit={(e) => handleSubmit(e, search)}>
        <input
          className="Search_input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
