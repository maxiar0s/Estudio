import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Header = () => {
  const course = "Half Stack application  devolpment";
  return <h2>{course}</h2>;
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <p>
        {part1}: <strong>{exercises1}</strong>
      </p>
      <p>
        {part2}: <strong>{exercises2}</strong>
      </p>
      <p>
        {part3}: <strong>{exercises3}</strong>
      </p>
    </>
  );
};

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <>
      <p>
        <em>
          Number of exercises:
          <strong> {exercises1 + exercises2 + exercises3}</strong>
        </em>
      </p>
    </>
  );
};

const Js = () => {
  console.log("Example 1");
  const t = [1, -1, 3];

  t.push(5);
  console.log(t.length); // se imprime 4
  console.log(t[1]); // se imprime -1

  t.forEach((value) => {
    console.log(value); // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
  });

  console.log("Example 2");
  const t2 = [1, -1, 3];
  const t3 = t.concat(5); // crea un nuevo array
  console.log(t2); // se imprime [1, -1, 3]
  console.log(t3); // se imprime [1, -1, 3, 5]

  console.log("Example 3");
  const t4 = [1, 2, 3];
  const m1 = t4.map((value) => value * 2);
  console.log(m1); // se imprime [2, 4, 6]

  console.log("Example 4");
  const t5 = [1, 2, 3];
  const m2 = t5.map((value) => "<li>" + value + "</li>");
  console.log(m2);
  // se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

  console.log("Example 5");
  const t6 = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = t6;
  console.log(first, second); // se imprime 1, 2
  console.log(rest); // se imprime [3, 4 ,5]
};

const Js2 = () => {
  console.log("Example 6");
  const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
  };

  const object2 = {
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
  };

  console.log(object1.name); // se imprime Arto Hellas
  const fieldName = "age";
  console.log(object1[fieldName]); // se imprime 35

  object1.address = "Helsinki";
  object1["secret number"] = 12341;
  console.log(object1);
};
const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Total />
      <Js />
      <Js2 />
    </>
  );
};

export default App;
