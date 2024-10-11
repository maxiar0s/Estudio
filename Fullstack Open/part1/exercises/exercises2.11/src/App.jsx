import { useState, useEffect } from "react";

import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          <div className="alert alert-danger">
            <strong>"{note.content}"</strong> was already removed from server
          </div>
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div className="container">
      <h1 className="title mt-3">Notes</h1>
      <Notification message={errorMessage} />
      <div className="appList">
        <div>
          <button
            type="button"
            className="btn btn-secondary mt-3 ms-3 mb-3"
            onClick={() => setShowAll(!showAll)}
          >
            show {showAll ? "important" : "all"}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul>
        <form className="newNote" onSubmit={addNote}>
          <input
            className="form-control-sm"
            value={newNote}
            onChange={handleNoteChange}
          />{" "}
          <br />
          <button
            className="btn btn-secondary mt-3 form-control-sm ms-1"
            type="submit"
          >
            Save
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default App;
