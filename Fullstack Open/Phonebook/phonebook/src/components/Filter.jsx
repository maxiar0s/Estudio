const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className="container border-0 shadow pt-2 rounded">
      <div className="gap-0 column-gap-3">
        <p className="fs-3 card-header text-center border-0 shadow-sm mb-3 p-2 rounded-pill">
          Filter by name{" "}
        </p>
        <input
          value={filter}
          onChange={handleFilterChange}
          className="input-group-text col-12 p-2 rounded-pill fs-6 shadow-sm"
          placeholder="Filter"
        />
      </div>
    </div>
  );
};

export default Filter;
