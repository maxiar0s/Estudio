const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      {note.content} <br />
      <button
        id="btnImp"
        className="btn btn-outline-secondary mt-1"
        onClick={toggleImportance}
      >
        {label}
      </button>
    </li>
  );
};

export default Note;
