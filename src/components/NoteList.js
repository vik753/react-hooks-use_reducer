import React from "react";
import NoteContext from "../contexts/NoteContext";

const NoteList = (props) => {
  const noteContext = React.useContext(NoteContext);
  const {
    notesState: { notes },
    deleteNote,
    doneNote,
  } = noteContext;
  // console.log(noteContext);

  if (!Object.values(notes).length)
    return (
      <div>
        <h3>Note Lists:</h3>
        <p>there is no notes, yet..</p>
      </div>
    );

  const notesList = Object.values(notes).map((note) => {
    // console.log(note);
    const createdDate = new Date(note.created).toDateString();
    const createdHours = new Date(note.created).getHours();
    const createdMinutes = new Date(note.created).getMinutes();
    const doneStyle = { color: "green", cursor: "pointer", marginLeft: "11px" };
    const notDoneStyle = {
      color: "blue",
      cursor: "pointer",
      marginLeft: "11px",
    };
    return (
      <li
        key={note.id}
        className="d-flex list-group-item justify-content-between"
      >
        <span>{note.text} </span>
        <span>
          <span>{`Created: ${createdDate} at ${createdHours}:${createdMinutes}`}</span>
          <span
            style={note.done ? doneStyle : notDoneStyle}
            onClick={() => doneNote(note.id)}
          >
            {note.done ? "done" : "not done"}
          </span>
          <span
            style={{
              cursor: "pointer",
              marginLeft: "11px",
              border: "1px solid tomato",
              borderRadius: "4px",
              padding: "0 6px",
            }}
            onClick={() => deleteNote(note.id)}
          >
            <b style={{ color: "tomato" }}>X</b>
          </span>
        </span>
      </li>
    );
  });

  return (
    <div>
      <h3>Note Lists:</h3>
      <ul className="list-group">{notesList}</ul>
    </div>
  );
};

export default NoteList;
