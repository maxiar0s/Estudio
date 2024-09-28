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
          <strong>{exercises1 + exercises2 + exercises3}</strong>
        </em>
      </p>
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  );
};

export default App;
