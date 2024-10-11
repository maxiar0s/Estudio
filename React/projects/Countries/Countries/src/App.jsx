import { useState, useEffect } from "react";
import countriesServices from "./services/countries";
import SearchFilter from "./components/SearchFilter";
import Filtered from "./components/Filtered";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesServices.getAll().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  const handleClick = (event) => {
    // event.preventDefault();
    console.log(event);
    setSearch(event);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div
      id="app"
      className="card text-center w-50 mx-auto font-monospace  shadow-lg mt-3"
    >
      <SearchFilter search={search} handleChange={handleChange} />
      <Filtered
        filteredCountries={filteredCountries}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;

// <div>
// <form>
//   <p>Find countries</p>
//   <input type="text" />
//   <button type="submit">Search</button>
// </form>
// <ul>
//   <li key={countries.name}>{countries}</li>
// </ul>
// </div>
