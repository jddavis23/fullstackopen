import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchList, setSearchList] = useState([])

  const ShallowEqual = () => {
    //console.log(persons.length)
    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name) {
        return persons[i]
      }
    }
    return false;
  }

  const addName = (event) => {
    event.preventDefault()
    if (ShallowEqual())
    {
      alert(newName + ' is already added to phonebook')
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
 
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    //console.log(event.target.value)
    setSearchName(event.target.value)
    const reducer = persons.filter((el) => el.name.toLowerCase().includes(searchName.toLowerCase()))
    console.log(reducer)
    setSearchList(reducer)
    // return(
    //   {personsToShow.map(person =>
    //   <li key={person.name}>
    //     {person.name} {person.number}
    //   </li>
    // )}
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={searchName} onChange={handleSearch}/>
        </div>
      </form>
      <form onSubmit={addName}>
        <h2>Add new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberAdd}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchList.map(person =>
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      )}
    </div>
  )
}

export default App
