import { useDispatch, useSelector } from "react-redux";
import { searchNote } from "../../redux/action/action";
import "./Search.css";
import { IState } from "../../redux/types";

const Search = () => {
  const search = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    dispatch(searchNote(str.trim()));
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
        <span className="material-icons">manage_search</span>
      </form>
    </div>
  );
};

export default Search;