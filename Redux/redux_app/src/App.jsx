import { createStore } from "redux";

import noteReducer from "./reducers/noteReducer";

const store = createStore(noteReducer);

store.dispatch({
  type: "new_note",
  payload: {
    content: "The app state is managed by redux ",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "new_note",
  payload: {
    content: "state changes are usually made with actions ",
    important: false,
    id: 2,
  },
});

const App = () => {
  const state = store.getState();
  return (
    <div>
      <ul>
        {state.map((note) => (
          <li key={note.id}>
            {note.content}{" "}
            <strong>{note.important ? "important" : "not important"}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
