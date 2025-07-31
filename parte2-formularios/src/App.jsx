import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './Service/service'


const Notification = ({ message }) => {
  if (!message) return null
  return (
    <div style={{
      color: 'green',
      background: '#e0e0e0',
      border: '2px solid green',
      padding: '10px',
      marginBottom: '15px'
    }}>
      {message}
    </div>
  )
}


const Filter = ({ filter, handleFilterChange, handleBrowse }) => (
  <form onSubmit={handleBrowse}>
    Filter shown with <input value={filter} onChange={handleFilterChange} />
    <button type="submit">Browse</button>
  </form>
)

const PersonForm = ({
  newName,
  newNumber,
  handleInputChange,
  handleNumberChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleInputChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Numbers = ({ persons, handleDelete }) => (
  <ul>
    {persons.map((person, idx) => (
      <li key={idx}>
        {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>remove</button>
      </li>
    ))}
  </ul>
)


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [warning, setWarning] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleBrowse = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === filter || person.number === filter)) {
      const foundPerson = persons.find(person => person.name === filter || person.number === filter);
      alert(`Se encontraron coincidencias es: ${foundPerson.name} ${foundPerson.number}`)
    } else {

      alert('No se encontraron coincidencias')
      setPersons(persons) // Resetea la lista de personas al estado original
      return
    }
}

useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Name or Number cannot be empty')
      return
    }
    if (persons.some(person => person.name === newName && person.number === newNumber)) {
      alert(` ${newName} is already added to phonebook`)
      return
    }

    if (persons.some(person => person.name === newName && person.number != newNumber)) {
     const personToUpdate = persons.find(person => person.name === newName)
  if (window.confirm(`"${newName}" ya existe. ¿Deseas reemplazar el número antiguo por el nuevo?`)) {
    const updatedPerson = { ...personToUpdate, number: newNumber }
    personService
      .update(personToUpdate.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person =>
          person.id !== personToUpdate.id ? person : returnedPerson
        ))
        setNotification(`Updated ${returnedPerson.name}`)
        setTimeout(() => setNotification(''), 3000)
        setNewName('')
        setNewNumber('')
        setWarning('')
      })
  }
  return
    }
    

    if (persons.some(person => person.number === newNumber)) {
      alert(` ${newNumber} is already added to phonebook`)
      return
    }

    const newPerson = {name: newName, number: newNumber};
    personService.create(newPerson).then(returnedPerson=>{
    setPersons(persons.concat(returnedPerson))
    setNotification(`Added ${returnedPerson.name}`)
    setTimeout(() => setNotification(''), 3000)
    setNewName('')
    setNewNumber('')
    setWarning('')
    })
}

const handleDelete = (id) => {
  const person = persons.find(p => p.id === id)
  if (window.confirm(`¿Seguro que quieres eliminar a ${person.name}?`)) {
    personService.remove(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }
}

  return (
     <div>
      <h2>Phonebook</h2>
      <h2><Notification message={notification}></Notification></h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleBrowse={handleBrowse}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Numbers persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App