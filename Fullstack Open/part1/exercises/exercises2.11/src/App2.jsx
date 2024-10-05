import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App2 = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Crear Nota");
    console.log(newNote);
    const addNoteToState = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    console.log(addNoteToState);
    setNotes([...notes, addNoteToState]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} content={note.content} />;
        })}
      </ul>
      <form onSubmit={handleClick}>
        <input type="text" onChange={handleNoteChange} value={newNote} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App2;
