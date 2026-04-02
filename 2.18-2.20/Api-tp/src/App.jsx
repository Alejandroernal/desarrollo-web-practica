import { useState, useEffect } from "react"
import axios from "axios"
import CountryList from "./components/CountryList"
import CountryDetails from "./components/CountryDetails"

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  const [weather, setWeather] = useState(null)

  // Traer todos los países
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => setCountries(response.data))
  }, [])

  const handleFilterChange = (e) => setFilter(e.target.value)

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  // Si hay un solo país, traer el clima de su capital
  useEffect(() => {
    if (filteredCountries.length === 1) {
      const capital = filteredCountries[0].capital?.[0]
      if (!capital) return

      const apiKey = "b6907d289e10d714a6e88b30761fae22" // demo key
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
        )
        .then(response => {
          setWeather(response.data)
        })
        .catch(error => console.error("Error obteniendo clima:", error))
    }
  }, [filteredCountries])

  return (
    <div>
      <h1>Find countries</h1>
      <input value={filter} onChange={handleFilterChange} />

      {filteredCountries.length > 10 && <p>Too many matches, specify another filter</p>}

      {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
        <CountryList countries={filteredCountries} setFilter={setFilter} />
      )}

      {filteredCountries.length === 1 && (
        <CountryDetails country={filteredCountries[0]} weather={weather} />
      )}
    </div>
  )
}

export default App
