import { useState,useEffect } from 'react'
import Search from './components/Search'
import Save from './components/Save'
import Display from './components/Display'
import axios from 'axios'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchList, setSearchList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [check, setCheck] = useState(null)

  useEffect(() => {
    personsService
    .getAll()
    .then(all => setPersons(all))
  },[])
  //console.log('rendered', persons.length, persons, 'length')

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
    const cpy = ShallowEqual()
    if (cpy)
    {
      const changePerson = {...cpy, number: newNumber}
      if (window.confirm(`${cpy.name} is already is saved. Would you like to change their number?`))
      {
        personsService.update(cpy.id, changePerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== cpy.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
          setSearchList(searchList.map(person => person.id !== cpy.id ? person : returnedPerson))
          setErrorMessage(`Updated ${cpy.name}'s number`)
          setCheck('update')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      }
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personsService
    .create(personObject)
    .then(all => {
      setPersons(persons.concat(all))
      setNewName('')
      setNewNumber('')
      setErrorMessage(`Added ${newName}`)
          setCheck('update')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
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
    //console.log(reducer)
    setSearchList(reducer)
    if (event.target.value.length === 0)
      setSearchList([])
  }

  const deletePerson = id => {
    const note = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${note.name}?`))
    {
      const url = `http://localhost:3001/persons/${id}`
      const changedNote = persons.filter(all => all.id !== id)
      personsService
      .dlete(url)
      .then(() => {
        //console.log('resp',response)
        setPersons(persons.map(all => all.id !== id))
        setSearchList(searchList.filter(all => all.id !== id))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.name}' was already removed from the phonebook`
        )
        setCheck('error')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setSearchList(searchList.filter(all => all.id !== id))
      })
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} check={check}/>
      <Search searchName={searchName} handleSearch={handleSearch}/>
      <Save newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} 
      handleNumberAdd={handleNumberAdd} addName={addName}/>
      <h2>Numbers</h2>
      <Display searchList={searchList} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
