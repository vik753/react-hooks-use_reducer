import React from "react";

const NoteList = ({ notes }) => {
  if (!Object.values(notes).length) return;

  const lists = Object.values(notes).map((note) => (
    <li key={note.id} className="list-group-item">
      {note.text}
    </li>
  ));

  return <ul className="list-group">{lists.length ? lists : null}</ul>;
};

export default NoteList;
