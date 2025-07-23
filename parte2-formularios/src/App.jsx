import { useState } from 'react'

const Filter = ({ filter, handleFilterChange, handleBrowse }) => (
  <form onSubmit={handleBrowse}>
    Filter shown with <input value={filter} onChange={handleFilterChange} />
    <button type="submit">Browse</button>
  </form>
)

const PersonForm = ({
  newName,
  newTel,
  handleInputChange,
  handleTelChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleInputChange} />
    </div>
    <div>
      number: <input value={newTel} onChange={handleTelChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Numbers = ({ persons }) => (
  <ul>
    {persons.map((person, idx) => (
      <li key={idx}>
        {person.name} {person.tel}
      </li>
    ))}
  </ul>
)


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', tel: '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [warning, setWarning] = useState('')
  const [newTel, setNewTel] = useState('')
  const [filter, setFilter] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleTelChange = (event) => {
    setNewTel(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleBrowse = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === filter || person.tel === filter)) {
      const foundPerson = persons.find(person => person.name === filter || person.tel === filter);
      alert(`Se encontraron coincidencias es: ${foundPerson.name} ${foundPerson.tel}`)
    } else {

      alert('No se encontraron coincidencias')
      setPersons(persons) // Resetea la lista de personas al estado original
      return
    }
}

/*
  const handleBrowse = (event) => {
  event.preventDefault()
  const filtro = filter.toLowerCase()
  const foundPerson = persons.find(
    person =>
      person.name.toLowerCase().includes(filtro) ||
      person.tel.includes(filter)
  )
  if (foundPerson) {
    alert(`Se encontraron coincidencias: ${foundPerson.name} ${foundPerson.tel}`)
  } else {
    alert('No se encontraron coincidencias')
  }
}
  */

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName.trim() === '' || newTel.trim() === '') {
      alert('Name or Tel cannot be empty')
      return
    }
    if (persons.some(person => person.name === newName)) {
      alert(` ${newName} is already added to phonebook`)
      return
    }

    if (persons.some(person => person.tel === newTel)) {
      alert(` ${newTel} is already added to phonebook`)
      return
    }

    

    setPersons(persons.concat({ name: newName , tel: newTel }))
    setNewName('')
    setNewTel('')
    setWarning('')


}


  return (
     <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleBrowse={handleBrowse}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newTel={newTel}
        handleInputChange={handleInputChange}
        handleTelChange={handleTelChange}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Numbers persons={persons} />
    </div>
  )
}

export default App