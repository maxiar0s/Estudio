import Notes from "./components/Notes.jsx";
import NewNote from "./components/NewNote.jsx";

const App = () => {
  const filteredSelected = (value) => {
    console.log(value);
  };
  return (
    <div>
      <NewNote />
      <div>
        all notes{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filteredSelected("ALL")}
        />
        important{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filteredSelected("IMPORTANT")}
        />
        not important{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filteredSelected("NOT_IMPORTANT")}
        />
      </div>
      <Notes />
    </div>
  );
};

export default App;
