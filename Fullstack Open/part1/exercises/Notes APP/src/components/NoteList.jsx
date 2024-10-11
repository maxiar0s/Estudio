import Note from "./Note";

const NoteList = ({ notesToShow, toggleImportanceOf, removeNote }) => {
  return (
    <ul>
      {notesToShow.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          removeNote={() => removeNote(note.id)}
        />
      ))}
    </ul>
  );
};

export default NoteList;
