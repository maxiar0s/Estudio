const SearchFilter = ({ search, handleChange }) => {
  return (
    <div className="">
      <p id="search" className="card-header shadow-sm text-light p-3 b rounded">
        <strong>FIND COUNTRIES</strong>
      </p>
      <input
        className=" w-50 text-center mt-4 mb-4 rounded shadow-sm"
        type="text"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default SearchFilter;
