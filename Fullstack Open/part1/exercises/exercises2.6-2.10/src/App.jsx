import { useState } from "react";
import "./App.css";
const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        {" "}
        <p>
          {" "}
          filter shown with <input type="text" onChange={handleFilterChange} />
        </p>
      </div>
    </div>
  );
};
const PeopleForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
  errMessage,
}) => {
  return (
    <form onSubmit={addPerson}>
      <h2>Add new person</h2>
      <div>
        name: <input type="text" value={newName} onChange={handleNameChange} />
        <br />
        number:{" "}
        <input type="text" value={newNumber} onChange={handleNumberChange} />
      </div>
      {errMessage && <div style={{ color: "red" }}>{errMessage}</div>}
      <div>
        <button type="submit" style={{ marginTop: "10px" }}>
          add
        </button>
      </div>
    </form>
  );
};

const Persons = ({ filteredPeople }) => {
  return (
    <div>
      {filteredPeople.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};
const App = () => {
  const [people, setPeople] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = people.find((person) => person.name === newName);
    if (existingPerson) {
      setErrMessage(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setErrMessage(null);
      }, 3000);
    }
    {
      setPeople([...people, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
      setErrMessage(null);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPeople = people.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <PeopleForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        errMessage={errMessage}
      />
      <Persons filteredPeople={filteredPeople} />
    </div>
  );
};

export default App;
