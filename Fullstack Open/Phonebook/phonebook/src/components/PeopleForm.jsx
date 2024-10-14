import Filter from "./Filter";

const PeopleForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form
      onSubmit={addPerson}
      className="container border-0 rounded shadow pt-2"
    >
      <p className=" fs-3 p-2 card-header text-center border-0 shadow-sm mb-3 rounded-pill">
        Add new person
      </p>
      <div className=" gap-0 column-gap-3">
        <div className="d-flex gap-1">
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            className="input-group-text col-6 p-2 rounded-pill fs-6 shadow-sm"
            placeholder="Name"
          />
          <input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            className="input-group-text col-6 p-2 rounded-pill fs-6 shadow-sm"
            placeholder="Number"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="text-center btn btn-primary container mt-3 mb-3 fs-6 p-2 rounded-pill shadow-sm"
            style={{ maxWidth: "200px" }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default PeopleForm;
