function CountryDetails({ country, weather }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      
      <img src={country.flags.png} alt="flag" width="150" />

      <h3>Weather in {country.capital?.[0]}</h3>
      {weather ? (
        <div>
          <p>Temperature {weather.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  )
}

export default CountryDetails
