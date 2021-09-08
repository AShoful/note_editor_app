import TextFields from "./Components/TextFields/TextFields";
import ListNotes from "./Components/ListNotes/ListNotes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListNotes />
        <TextFields />
      </header>
      {/* <span className="material-icons">play_circle_outline</span>
      <span className="material-icons">play_circle</span>
      <span className="material-icons">manage_search</span>
      <span className="material-icons">keyboard_arrow_up</span>
      <span className="material-icons">keyboard_arrow_down</span> */}
    </div>
  );
}

export default App;
