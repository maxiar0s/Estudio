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
      <div>
        {filteredCountries.map((country) => {
          return (
            <div key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleClick(country.name.common)}>
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
