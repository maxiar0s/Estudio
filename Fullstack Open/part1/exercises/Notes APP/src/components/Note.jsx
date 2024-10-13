const Note = ({ note, toggleImportance, removeNote }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <div className="card card-body  mt-3 shadow" id="noteCard">
      <div className="">
        <p className="mt-2 fs-5">{note.content}</p>
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
