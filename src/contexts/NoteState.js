import React from "react";
import NoteContext from "./NoteContext";
import noteReducer from "./noteReducer";
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "./types";

const NoteState = ({ children }) => {
  const initialState = {
    notes: {},
    otherState: {
      'id001': 'some text'
    }
  };
  const [state, dispatch] = React.useReducer(noteReducer, initialState);

  React.useEffect(() => {
    console.log("NoteState", state)
  }, [state])

  const addNote = (note) => {
    const toDispatch = {
      type: ADD_NOTE,
      note,
    }
    dispatch(toDispatch);
  };

  const editNote = (note) => {
    dispatch(() => ({
      type: EDIT_NOTE,
      note,
    }));
  };

  const deleteNote = (id) => {
    dispatch(() => ({
      type: DELETE_NOTE,
      id,
    }));
  };

  return (
    <NoteContext.Provider
      value={{
        notesState: state,
        addNote,
        editNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
