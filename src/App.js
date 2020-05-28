import React, { useReducer } from "react";
import NoteList from "./components/NoteList";
import { initialState, reducer } from "./state/notes-reducer";
import { addNote } from "./state/notes-actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const noteTextEl = React.useRef(null);

  const createNoteHandler = (e) => {
    e.preventDefault();
    const text = noteTextEl.current.value.trim();
    if (!text) return;
    const id = `${Math.random()}-${Date.now()}`;
    dispatch(
      addNote({
        id,
        text,
      })
    );
  };

  return (
    <div className="container mt-5">
      <div
        className="form-group "
        style={{ maxWidth: "500px", margin: "0 auto 22px" }}
      >
        <label htmlFor="note-input">New note</label>
        <input
          ref={noteTextEl}
          type="text"
          id="note-input"
          className="form-control mb-2"
          placeholder="create new note"
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={createNoteHandler}
        >
          Add note
        </button>
      </div>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        {Object.values(state.notes).length ? <NoteList notes={state.notes}/>  : null}
      </div>
    </div>
  );
}

export default App;
