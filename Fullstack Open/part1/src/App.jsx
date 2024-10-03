import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Crear Nota");
    console.log(newNote);
    const addNoteToState = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    console.log(addNoteToState);
    setNotes([...notes, addNoteToState]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} content={note.content} />;
        })}
      </ul>
      <form onSubmit={handleClick}>
        <input type="text" onChange={handleNoteChange} value={newNote} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const goodCounter = () => {
//     setGood(good + 1);
//   };
//   const neutralCounter = () => {
//     setNeutral(neutral + 1);
//   };
//   const badCounter = () => {
//     setBad(bad + 1);
//   };
//   const total = () => {
//     return good + neutral + bad;
//   };

//   const reset = () => {
//     setGood(0);
//     setNeutral(0);
//     setBad(0);
//   };
//   return (
//     <div>
//       <h1>Give feedback</h1>
//       <button onClick={goodCounter}>Good</button>
//       <button onClick={neutralCounter}>Neutral</button>
//       <button onClick={badCounter}>Bad</button>
//       <h1>Statics</h1>
//       <div>
//         Good: {good} <br />
//         Neutral: {neutral} <br />
//         Bad: {bad}
//       </div>
//       <p>Total: {Math.round(total())}</p>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// const IfUsed = ({ clicks }) => {
//   if (clicks.length === 0) {
//     return <h1>Counter not being used</h1>;
//   }
//   {
//     return (
//       <div>
//         {clicks} <br />
//         Counter of clicks: {clicks.length}
//       </div>
//     );
//   }
// };

// const App = () => {
//   const [leftClick, setLeftClick] = useState(0);
//   const [rightClick, setRightClick] = useState(0);
//   const [clicks, setClicks] = useState([]);

//   const handleLeftClick = () => {
//     setLeftClick(leftClick + 1);
//     setClicks((prevClicks) => {
//       return [...prevClicks, "L"];
//     });
//   };
//   const handleRightClick = () => {
//     setRightClick(rightClick + 1);
//     setClicks((prevClicks) => {
//       return [...prevClicks, "R"];
//     });
//   };
//   const zeroClick = () => {
//     setLeftClick(0);
//     setRightClick(0);
//     setClicks([]);
//   };
//   return (
//     <div>
//       {leftClick}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {rightClick}
//       <br />
//       <div>
//         <IfUsed clicks={clicks} />
//       </div>

//       <button onClick={zeroClick}>Zero</button>
//     </div>
//   );
// };

//---------------------------------------------
//---------------------------------------------
//---------------------------------------------

// const Counter = ({ counter }) => {
//   return (
//     <div>
//       <p>{counter}</p>
//     </div>
//   );
// };

// const Button = ({ click, text }) => {
//   return (
//     <div>
//       <button onClick={click}>{text}</button>
//     </div>
//   );
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("Counter Value: ", counter);
//   const clickPlus = () => {
//     console.log("Counter Value: ", counter);
//     setCounter(counter + 1);
//   };
//   const clickMinus = () => {
//     console.log("Counter Value: ", counter);
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };
//   const clickZero = () => {
//     console.log("Counter Value: ", counter);
//     setCounter(0);
//   };
//   return (
//     <div>
//       <Counter counter={counter} />
//       <Button click={clickPlus} text="Plus" />
//       <Button click={clickMinus} text="Minus" />
//       <Button click={clickZero} text="Zero" />
//     </div>
//   );
// };

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------

// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };

// const Content = (props) => {
//   return (
//     <>
//       <p>
//         {props.part}: <strong>{props.exercises}</strong>
//       </p>
//     </>
//   );
// };

// const Total = (props) => {
//   return (
//     <>
//       <p>
//         <em>
//           Number of exercises:
//           <strong>
//             {" "}
//             {props.exercises1 + props.exercises2 + props.exercises3}
//           </strong>
//         </em>
//       </p>
//     </>
//   );
// };

// const Js = () => {
//   console.log("Example 1");
//   const t = [1, -1, 3];

//   t.push(5);
//   console.log(t.length); // se imprime 4
//   console.log(t[1]); // se imprime -1

//   t.forEach((value) => {
//     console.log(value); // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
//   });

//   console.log("Example 2");
//   const t2 = [1, -1, 3];
//   const t3 = t.concat(5); // crea un nuevo array
//   console.log(t2); // se imprime [1, -1, 3]
//   console.log(t3); // se imprime [1, -1, 3, 5]

//   console.log("Example 3");
//   const t4 = [1, 2, 3];
//   const m1 = t4.map((value) => value * 2);
//   console.log(m1); // se imprime [2, 4, 6]

//   console.log("Example 4");
//   const t5 = [1, 2, 3];
//   const m2 = t5.map((value) => "<li>" + value + "</li>");
//   console.log(m2);
//   // se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

//   console.log("Example 5");
//   const t6 = [1, 2, 3, 4, 5];
//   const [first, second, ...rest] = t6;
//   console.log(first, second); // se imprime 1, 2
//   console.log(rest); // se imprime [3, 4 ,5]
// };

// const Js2 = () => {
//   console.log("Example 6");
//   const object1 = {
//     name: "Arto Hellas",
//     age: 35,
//     education: "PhD",
//   };

/*const object2 = {
    name: "Full Stack web application development",
    level: "intermediate studies",
    size: 5,
  };

  const object3 = {
    name: {
      first: "Dan",
      last: "Abramov",
    },
    grades: [2, 3, 5, 3],
    department: "Stanford University",
  };*/

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

//---------------------------------------
//---------------------------------------
//---------------------------------------

/*const App = () => {
    const Hello = (props) => {
      return (
        <div>
          <p>
            Hello {props.name}, you are {props.age} years old
          </p>
        </div>
      )
    }

    const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course.name} />
      <Content
        part={course.parts[0].name}
        exercises={course.parts[0].exercises}
      />
      <Content
        part={course.parts[1].name}
        exercises={course.parts[1].exercises}
      />
      <Content
        part={course.parts[2].name}
        exercises={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
      <Js />
      <Js2 />
      <Exercise1 />
      <Exercise2 />
    </>
  );
};*/

export default App;
