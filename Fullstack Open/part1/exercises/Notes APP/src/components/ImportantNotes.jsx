const ImportantNotes = ({ showAll, showImportant }) => {
  return (
    <div>
      <button
        type="button"
        className="btn rounded shadow-sm ms-4 mb-3"
        id="show-important"
        onClick={showImportant}
      >
        Show {showAll ? "important" : "all"}
      </button>
    </div>
  );
};
export default ImportantNotes;
