// import Weather from "./Weather";
const OneCountry = ({ country }) => {
  return (
    <div>
      <h1 className="font-monospace">
        <strong>{country[0].name.common}</strong>
      </h1>
      <p>Capital: {country[0].capital}</p>
      <p>Area: {country[0].area}</p>
      <h2>Languages</h2>
      <ul className="list list-unstyled">
        {Object.values(country[0].languages).map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </ul>
      <img
        className="img-fluid mb-4 shadow"
        src={country[0].flags.png}
        alt={country[0].flags.alt}
      />
    </div>
  );
};

export default OneCountry;

/* <Weather country={country[0].capital[0]} /> */
