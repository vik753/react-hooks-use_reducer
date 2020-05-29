import React from "react";
import { NoteContext } from "../contexts/Notes/NoteContext";

const NotesList = (props) => {
  const { notes } = React.useContext(NoteContext);

  if (!Object.values(notes).length) return null;

  return (
    <div style={{ maxWidth: "500px", margin: "22px auto 0" }}>
      <h3>Notes: </h3>
      <ul className="list-group">
        {Object.values(notes).map(note => <li className="list-group-item">{note.text}</li>)}

      </ul>
    </div>
  );
};

export default NotesList;
