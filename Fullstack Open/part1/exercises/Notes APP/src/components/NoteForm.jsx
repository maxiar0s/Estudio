const NoteForm = ({ newNote, handleNoteChange, addNote }) => {
  return (
    <form className="newNote" onSubmit={addNote}>
      <input
        className="form-control-sm ms-3"
        value={newNote}
        onChange={handleNoteChange}
      />{" "}
      <br />
      <button
        className="btn btn-outline-primary mt-3 form-control-sm ms-3"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;
