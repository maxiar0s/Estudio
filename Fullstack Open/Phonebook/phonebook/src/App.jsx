import { useState, useEffect } from "react";
import "./App.css";

//--Services--
import peopleService from "./services/people";

//--Components--
import Filter from "./components/Filter";
import PeopleForm from "./components/PeopleForm";
import People from "./components/People";
import Notification from "./components/Notification";

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    peopleService.getAll().then((response) => {
      setPeople(response);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const capitalized = newName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    console.log(capitalized);

    const personObject = {
      name: capitalized,
      number: newNumber,
    };

    const checkName = people.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    console.log(checkName);

    if (checkName && checkName.number === personObject.number) {
      window.alert(`${newName} is already added to phonebook`);
    } else if (checkName && checkName.number !== personObject.number) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        peopleService
          .update(checkName.id, personObject)
          .then((returnedPerson) => {
            setPeople(
              people.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage(`Updated ${returnedPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setMessage({
              text: `Information of ${personObject.name} has already been removed from server`,
              type: "error",
            });
          });
        setPeople(people.filter((person) => person.id !== checkName.id));
      }
    } else {
      peopleService
        .create(personObject)
        .then((returnedPerson) => {
          setPeople(people.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setMessage({
            text: `Added ${returnedPerson.name}`,
            type: "success",
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.error);
          setMessage({
            text: error.response.data.error,
            type: "error",
          });
        });
    }
  };

  const deletePerson = (id) => {
    const person = people.find((person) => person.id === id);
    if (window.confirm("Are you sure you want to delete this person?")) {
      peopleService
        .remove(person.id)
        .then(() => {
          setPeople(people.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setMessage({
            text: `Information of ${person.name} has already been removed from server`,
            type: "error",
          });
          setPeople(people.filter((person) => person.id !== id));
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  //--Handlers--
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex container gap-0 column-gap-3 mt-3">
          {" "}
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <PeopleForm
            addPerson={addPerson}
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}
          />
        </div>
        <div className="d-flex container gap-0 column-gap-3 mt-4 col-12 border-0 ">
          <People people={people} deletePerson={deletePerson} filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default App;
