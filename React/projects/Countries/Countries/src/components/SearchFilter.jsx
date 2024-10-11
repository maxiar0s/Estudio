const SearchFilter = ({ search, handleChange }) => {
  return (
    <div className="">
      <p className="card-header shadow-sm">
        <strong>Find countries</strong>
      </p>
      <input
        className=" w-50 text-center mt-4 mb-4"
        type="text"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default SearchFilter;
