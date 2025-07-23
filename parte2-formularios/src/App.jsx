import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', tel: '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [warning, setWarning] = useState('')
  const [newTel, setNewTel] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

  const handleTelChange = (event) => {
    setNewTel(event.target.value)
    setWarning('') // Limpia la advertencia al escribir
  }

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
    setPersons(persons.concat({ name: newName , tel: newTel }))
    setNewName('')
    setNewTel('')
    setWarning('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, idx) => (
          <li key={idx}>{person.name} {person.tel}</li>
        ))}
      </ul>
    </div>
  )
}

export default App