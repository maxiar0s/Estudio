import { createStore } from "redux";

import "./App.css";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

function App() {
  return (
    <div className="App">
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

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     setCount(0);
  //     alert("Cant go below 0");
  //   }
  // };

  // const reset = () => {
  //   setCount(0);
  // };

  // return (
  //   <div style={{ textAlign: "center" }}>
  //     <h1>Count: {count}</h1>
  //     <button onClick={increment}>Increment</button>
  //     <button onClick={reset}>Reset</button>
  //     <button onClick={decrement}>Decrement</button>
  //   </div>
  // );
}

export default App;
