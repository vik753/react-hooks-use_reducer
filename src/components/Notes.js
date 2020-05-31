import React from "react";
import NoteContext from "../contexts/NoteContext";

const Notes = (props) => {
  const noteContext = React.useContext(NoteContext);
  const { addNote } = noteContext;

  const [inputState, setInputState] = React.useState("");

  const createNote = () => {
    const id = `${Math.random()}-${new Date().getTime()}`;
    return {
      id,
      text: inputState,
      done: false,
    };
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const newNote = createNote();
    addNote(newNote);
    setInputState("");
  };

  return (
    <form onSubmit={submitHandle}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Note text:</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={inputState}
          onChange={(e) => setInputState(e.target.value.trim())}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Notes;
