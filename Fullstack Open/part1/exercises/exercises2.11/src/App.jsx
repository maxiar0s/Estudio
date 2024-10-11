import { useState, useEffect } from "react";

import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import NoteForm from "./components/NoteForm";
import ImportantNotes from "./components/ImportantNotes";
import NoteList from "./components/NoteList";

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
    const noteId = notes.length + 1;
    const noteObject = {
      id: noteId.toString(),
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const removeNote = (id) => {
    const note = notes.find((n) => n.id === id);
    noteService
      .dltNote(id)
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id));
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

  const showImportant = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container rounded mb-3 shadow" id="appContainer">
      <h1 className="title mt-3">Notes</h1>
      <Notification message={errorMessage} />
      <div className="appList shadow-lg bg-body rounded" id="appList">
        <ImportantNotes showAll={showAll} showImportant={showImportant} />
        <NoteList
          notesToShow={notesToShow}
          toggleImportanceOf={toggleImportanceOf}
          removeNote={removeNote}
        />
        <NoteForm
          newNote={newNote}
          handleNoteChange={handleNoteChange}
          addNote={addNote}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
