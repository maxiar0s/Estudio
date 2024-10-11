// import countriesServices from "../services/countries";
// import { useState, useEffect } from "react";

// const Weather = ({ country }) => {
//   const [weather, setWeather] = useState({});

//   useEffect(() => {
//     countriesServices
//       .getWeather(country.capital)
//       .then((weatherCapital) => setWeather(weatherCapital));
//   }, [country.capital]);

//   return (
//     <div>
//       <h1>Weather in {country.capital}</h1>
//       <p>temperature {weather.main.temp}</p>
//       <img
//         src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
//         alt="weather"
//       />
//       <p>wind {weather.wind.speed}</p>
//     </div>
//   );
// };

// export default Weather;
