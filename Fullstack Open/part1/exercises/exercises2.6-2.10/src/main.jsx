import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

axios.get("http://localhost:3001/people").then((response) => {
  console.log(response.data);
  createRoot(document.getElementById("root")).render(
    <App people={response.data} />
  );
});
