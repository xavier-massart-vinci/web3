import axios from 'axios';
import { useEffect, useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const hook = () =>{
    axios.
    get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }
  useEffect(hook, []);

  const addPhone = (e) =>{
    e.preventDefault();

    if(persons.some(p => p.name === newName)){
      alert(`${newName} is already added to phonebook`);
    }else{
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
    }
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (e) =>{
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) =>{
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((persone) => <li key={persone.name}>{persone.name} | {persone.number}</li>)}
      </ul>
      <div>debug: {newName} | {newNumber}</div>
    </div>
  )
}

export default App