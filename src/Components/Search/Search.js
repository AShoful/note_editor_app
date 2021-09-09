import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../../redux/action/action";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(() => {
      const str = e.target.value;
      dispatch(searchNote(str.trim()));
      return str;
    });
  };

  return (
    <div className="Search">
      <form className="Search_form">
        <input
          className="Search_input"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
