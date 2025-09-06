function CountryList({ countries, setFilter }) {
  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca3}>
          {country.name.common}{" "}
          <button onClick={() => setFilter(country.name.common)}>show</button>
        </li>
      ))}
    </ul>
  )
}

export default CountryList
