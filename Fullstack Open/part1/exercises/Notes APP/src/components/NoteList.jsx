import Note from "./Note";

const NoteList = ({ notesToShow, toggleImportanceOf, removeNote }) => {
  return (
    <div className="container-fluid">
      {notesToShow.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          removeNote={() => removeNote(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
