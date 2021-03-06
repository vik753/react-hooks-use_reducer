import React from "react";
import NoteContext from "../contexts/NoteContext";

const Notes = (props) => {
  console.log("Notes props:", props);
  const noteContext = React.useContext(NoteContext);
  const { addNote } = noteContext;

  const [inputState, setInputState] = React.useState("");

  const createNote = () => {
    const id = `${Math.random()}-${new Date().getTime()}`;
    const created = new Date().getTime();
    return {
      id,
      text: inputState.trim(),
      done: false,
      created,
    };
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const newNote = createNote();
    addNote(newNote);
    setInputState("");
    props.history.push("/");
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
          onChange={(e) => setInputState(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Notes;
