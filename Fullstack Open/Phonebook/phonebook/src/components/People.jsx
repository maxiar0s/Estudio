import people from "../services/people";
import Person from "./Person";

const People = ({ people, deletePerson, filter }) => {
  return (
    <div className="col-12 gap-0 column-gap-3">
      {people
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, i) => (
          <Person key={i} person={person} deletePerson={deletePerson} />
        ))}
    </div>
  );
};

export default People;
