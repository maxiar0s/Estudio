const PeopleForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
  errMessage,
}) => {
  return (
    <form onSubmit={addPerson}>
      <h2>Add new person</h2>
      <div>
        name: <input type="text" value={newName} onChange={handleNameChange} />
        <br />
        number:{" "}
        <input type="text" value={newNumber} onChange={handleNumberChange} />
      </div>
      {errMessage && <div style={{ color: "red" }}>{errMessage}</div>}
      <div>
        <button type="submit" style={{ marginTop: "10px" }}>
          add
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
