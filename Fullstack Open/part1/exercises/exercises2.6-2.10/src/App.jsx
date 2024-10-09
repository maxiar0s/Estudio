import { useState, useEffect } from "react";
import "./App.css";
import PeopleForm from "./components/PeopleForm";
import Filter from "./components/Filter";
import PeopleList from "./components/PeopleList";
import peopleService from "./services/people";

const App = () => {
  const [people, setPeople] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    peopleService.getAll().then((initialPeople) => {
      setPeople(initialPeople);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = people.find((person) => person.name === newName);
    const personObject = {
      name: newName,
      number: newNumber,
      id: people.length + 1,
    };
    if (existingPerson) {
      setErrMessage(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setErrMessage(null);
      }, 3000);
    }
    {
      peopleService.create(personObject).then((response) => {
        setPeople(people.concat(response));
        setNewName("");
        setNewNumber("");
        setErrMessage(null);
      });
      // setPeople([...people, { name: newName, number: newNumber }]);
      // setNewName("");
      // setNewNumber("");
      // setErrMessage(null);
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

  const updatePerson = (id, newObject) => {
    peopleService
      .update(id, newObject)
      .then((returnedPerson) => {
        setPeople(
          people.map((person) => (person.id !== id ? person : returnedPerson))
        );
      })
      .catch((error) => {
        setErrMessage(
          `Information of ${newObject.name} has already been removed from server`
        );
        setTimeout(() => {
          setErrMessage(null);
        }, 3000);
      });
  };

  /*************  ✨ Codeium Command 🌟  *************/
  /*************  ✨ Codeium Command 🌟  *************/
  const dltPerson = (id) => {
    const personToRemove = people.find((person) => person.id === id);
    peopleService
      .dlt(id)
      .then(() => {
        setPeople(people.filter((person) => person.id !== id));
      })
      .catch((error) => {
        setErrMessage(
          `Information of ${personToRemove.name} has already been removed from server`
          // `Information of ${
          //   people.find((person) => person.id === id)?.name
          // } has already been removed from server`
        );
        setTimeout(() => {
          setErrMessage(null);
        }, 3000);
      });
  };
  /******  02cb1208-6a18-435c-92a8-0e503518a13a  *******/
  /******  e612aad2-d430-4f60-9b7f-d0080766d386  *******/

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
      <PeopleList filteredPeople={filteredPeople} dlt={dltPerson()} />
    </div>
  );
};

export default App;
