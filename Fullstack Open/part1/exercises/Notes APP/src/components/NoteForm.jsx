const NoteForm = ({ newNote, handleNoteChange, addNote }) => {
  return (
    <form className="form text-center" onSubmit={addNote}>
      <textarea
        id="textarea"
        className="rounded w-75 border-0 shadow p-4 mt-4 fs-5"
        placeholder="Write your note here..."
        value={newNote}
        onChange={handleNoteChange}
      />
      <br />
      <button
        id="btn-save"
        className="btn rounded btn-lg mt-4  w-25 shadow"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;
