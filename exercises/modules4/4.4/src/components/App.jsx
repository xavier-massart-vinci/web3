import { useEffect, useState } from 'react'
import personsService from 'services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const hook = () =>{

    personsService.getAll()
    .then(response => {
      setPersons(response.data)
    });
  }
 
  useEffect(hook, []);

  const addPhone = (e) =>{
    e.preventDefault();

    if(persons.filter(p => p.name === newName).length != 0){
      alert(`${newName} is already added to phonebook`);
    }else{
      const person = {
        name: newName,
        number: newNumber
      }
      personsService.create(person)
      .then(result => {
        setPersons(persons.concat(result.data)) 
      })
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