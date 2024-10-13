const ImportantNotes = ({ showAll, showImportant }) => {
  return (
    <div>
      <button
        type="button"
        className="btn rounded shadow-sm ms-5"
        id="show-important"
        onClick={showImportant}
      >
        Show {showAll ? "important" : "all"}
      </button>
    </div>
  );
};
export default ImportantNotes;
