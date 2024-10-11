const Note = ({ note, toggleImportance, removeNote }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <div
      className="card card w-75 mb-2 shadow border-opacity-10"
      id="noteContainer"
    >
      <div className="card-body ms-3 " id="noteBody">
        <li className="singleNote">
          {note.content} <br />
          <button
            id="btnImp"
            className="btn btn-outline-secondary mt-1"
            onClick={toggleImportance}
          >
            {label}
          </button>
          <button
            className="btn btn-outline-danger form-control-sm ms-1"
            onClick={removeNote}
          >
            Delete
          </button>
        </li>
      </div>
    </div>
  );
};

export default Note;
