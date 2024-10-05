import { createRoot } from "react-dom/client";
import App2 from "./App2.jsx";
import "./index.css";

import axios from "axios";

// const promise = axios.get("http://localhost:3001/notes");
// console.log(promise);
// promise.then((response) => {
//   console.log(response);
// });

axios.get("http://localhost:3001/notes").then((response) => {
  //const notes = response.data
  console.log(response.data);
  createRoot(document.getElementById("root")).render(
    <App2 notes={response.data} />
  );
});
