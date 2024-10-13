const Note = ({ note, toggleImportance, removeNote }) => {
  const label = note.important ? "Make not important" : "Make important";

  return (
    <div className="card card-body mb-4 shadow border-0" id="noteCard">
      <div className="">
        <p id="noteContent" className="mt-2 fs-5">
          {note.content}
        </p>
        <button
          id="btn-importance"
          className="btn rounded me-2 shadow-sm"
          onClick={toggleImportance}
        >
          {label}
        </button>
        <button
          id="btn-delete"
          className="btn rounded shadow-sm"
          onClick={removeNote}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
