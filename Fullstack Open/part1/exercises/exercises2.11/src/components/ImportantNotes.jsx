const ImportantNotes = ({ showAll, showImportant }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mt-4 ms-5 mb-4"
        onClick={showImportant}
      >
        Show {showAll ? "important" : "all"}
      </button>
    </div>
  );
};
export default ImportantNotes;
