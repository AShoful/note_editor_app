import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNote } from "../../redux/action/action";
import "./Search.css";

const Search = () => {
  const searchInStore = useSelector((state) => state.search);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInStore === "") {
      setSearch("");
    }
  }, [searchInStore]);

  const handleChange = (e) => {
    setSearch(() => {
      const str = e.target.value;
      dispatch(searchNote(str.trim()));
      return str;
    });
  };

  return (
    <div className="Search">
      <form
        className="Search_form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchNote(search));
        }}
      >
        <input
          className="Search_input"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <span className="material-icons">manage_search</span>
      </form>
    </div>
  );
};

export default Search;
