const Person = ({ person, deletePerson }) => {
  return (
    <div className="">
      <div className="d-flex ">
        <div className="col-8 ">
          <div className="me-3">
            <p className="text-center fs-5 rounded-pill shadow pt-3 pb-3 ">
              {person.name} {person.number}
            </p>
          </div>
        </div>

        <div className="col-4">
          <div className="">
            <button
              onClick={() => deletePerson(person.id)}
              className="btn btn-danger rounded-pill shadow pt-3 pb-3 col-12 fs-5"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
