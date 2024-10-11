const SearchFilter = ({ search, handleChange }) => {
  return (
    <div>
      <p>Find countries</p>
      <input type="text" onChange={handleChange} value={search} />
    </div>
  );
};

export default SearchFilter;
