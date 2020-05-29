import React from "react";
import { NoteContext } from "./NoteContext";
import { notesReducer } from "./notesReducer";
import { ADD_NOTE } from "../types";

const NotesState = ({ children }) => {
  const [state, dispatch] = React.useReducer(notesReducer, {});

  const addNote = (payload) => {
    dispatch({
      type: ADD_NOTE,
      payload,
    });
  };

  return (
    <NoteContext.Provider value={{ notes: state, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NotesState;
