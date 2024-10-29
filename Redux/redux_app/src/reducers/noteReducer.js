const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "new_note":
      return state.concat(action.payload);
    case "toggle_importance": {
      const id = action.payload.id;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    }
    default:
      return state;
  }
};

export default noteReducer;
