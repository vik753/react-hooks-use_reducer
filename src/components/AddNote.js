import React, { useContext } from "react";
import { AlertContext } from "../contexts/Alert/AlertContexxt";
import { NoteContext } from "../contexts/Notes/NoteContext";

const AddNote = (props) => {
  const { show, alert } = useContext(AlertContext);
  const { notes, addNote } = useContext(NoteContext);

  const inputRef = React.useRef();

  const createNote = (text) => {
    const id = `${Math.random()}-${Date.now()}`;
    return { text, id };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();

    if (!text) {
      show({
        type: "danger",
        text: "You should input any data to create note.",
      });
      return;
    }

    addNote(createNote(text));
    inputRef.current.value = "";
    show({
      type: "success",
      text: "You successfully create note.",
    });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      style={{ maxWidth: "500px", margin: "22px auto 0" }}
    >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Note text</label>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={
            alert && alert.type === "danger"
              ? { borderColor: "tomato" }
              : { borderColor: "lightgrey" }
          }
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNote;
