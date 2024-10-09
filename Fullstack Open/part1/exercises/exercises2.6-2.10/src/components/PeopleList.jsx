const PeopleList = ({ filteredPeople, dlt }) => {
  return (
    <div>
      {filteredPeople.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={dlt(person.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default PeopleList;
