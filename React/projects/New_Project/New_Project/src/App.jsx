import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // const handleClick = (e) => {
  //   e.preventDefault();
  // };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObject = {
      id: tasks.length + 1,
      tasks: newTask,
      completed: false,
    };
    setTasks(tasks.concat(taskObject));
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Añadir</button>
      </form>
      <div>
        <p>{newTask}</p>
      </div>
    </div>
  );
};

export default App;
