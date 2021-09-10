import TextFields from "./Components/TextFields/TextFields";
import ListNotes from "./Components/ListNotes/ListNotes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ListNotes />
      <TextFields />
      {/* <span className="material-icons">manage_search</span> */}
    </div>
  );
}

export default App;
