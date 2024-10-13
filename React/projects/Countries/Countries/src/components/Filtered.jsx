import OneCountry from "./OneCountry";

const Filtered = ({ filteredCountries, handleClick }) => {
  if (filteredCountries.length > 10) {
    return (
      <div className="tooMany">Too many matches, specify another filter</div>
    );
  } else if (filteredCountries.length === 1) {
    return <OneCountry country={filteredCountries} />;
  } else {
    return (
      <div className="mb-3">
        {filteredCountries.map((country) => {
          return (
            <div className="mb-2" key={country.name.common}>
              {country.name.common}
              <button
                id="showBtn"
                className="btn
                ms-3 w-10 shadow-sm text-light"
                onClick={() => handleClick(country.name.common)}
              >
                Show
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Filtered;
