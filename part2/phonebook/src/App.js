import { useState,useEffect } from 'react'
import Search from './components/Search'
import Save from './components/Save'
import Display from './components/Display'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    console.log('we in')
    personsService
    .getAll()
    .then(all => setPersons(all))
  },[])
  console.log('rendered', persons.length, 'length')

  const ShallowEqual = () => {
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
    }
    personsService
    .create(personObject)
    .then(all => {
      setPersons(all)
      setNewName('')
      setNewNumber('')
    })
 
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

  const deletePerson = id => {
    const url = `http://localhost:3001/persons/${id}`
    const note = persons.find(n => n.id === id)
    const changedNote = persons.filter(all => all.id !== id)
    axios
    .delete(url)
    .then(response => {
      console.log(response)
      setPersons(persons.map(all => all.id !== id))
    })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchName={searchName} handleSearch={handleSearch}/>
      <Save newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} 
      handleNumberAdd={handleNumberAdd} addName={addName}/>
      <h2>Numbers</h2>
      <Display searchList={searchList} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
