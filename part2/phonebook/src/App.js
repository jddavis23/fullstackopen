import { useState } from 'react'
import Search from './components/Search'
import Save from './components/Save'
import Display from './components/Display'

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
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearchName(event.target.value)
    const reducer = persons.filter((el) => el.name.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(reducer)
    setSearchList(reducer)
    if (event.target.value.length === 0)
      setSearchList([])
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchName={searchName} handleSearch={handleSearch}/>
      <Save newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} 
      handleNumberAdd={handleNumberAdd} addName={addName}/>
      <h2>Numbers</h2>
      <Display searchList={searchList}/>
    </div>
  )
}

export default App
