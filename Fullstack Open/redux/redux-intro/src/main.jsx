import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state > 0) {
        return state - 1;
      } else {
        alert("Cant go below 0");
        return 0;
      }

    case "RESET":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

function App() {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => store.dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
