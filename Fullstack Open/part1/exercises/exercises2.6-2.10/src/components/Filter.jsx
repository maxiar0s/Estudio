const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        {" "}
        <p>
          {" "}
          filter shown with <input type="text" onChange={handleFilterChange} />
        </p>
      </div>
    </div>
  );
};
export default Filter;
