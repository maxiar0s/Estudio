const NoteForm = ({ newNote, handleNoteChange, addNote }) => {
  return (
    <form className="form text-center" onSubmit={addNote}>
      <textarea
        id="textarea"
        className="rounded w-75 border-secondary shadow p-4 mt-3"
        value={newNote}
        onChange={handleNoteChange}
      />
      <br />
      <button
        id="btn-save"
        className="btn rounded btn-lg mt-3 w-25 shadow"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;
