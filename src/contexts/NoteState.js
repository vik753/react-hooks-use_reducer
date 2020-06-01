import React from "react";
import NoteContext from "./NoteContext";
import noteReducer from "./noteReducer";
import {
  ADD_NOTE,
  DELETE_NOTE,
  DONE_NOTE,
  EDIT_NOTE,
} from "./types";

const NoteState = ({ children }) => {
  const initialState = {
    notes: {},
    otherState: {
      id001: "some text",
    },
  };
  const [state, dispatch] = React.useReducer(noteReducer, initialState);

  // React.useEffect(() => {
  //   console.log("NoteState", state);
  // }, [state]);

  const addNote = (note) => {
    dispatch({
      type: ADD_NOTE,
      note,
    });
  };

  const editNote = (note) => {
    dispatch({
      type: EDIT_NOTE,
      note,
    });
  };

  const deleteNote = (id) => {
    dispatch({
      type: DELETE_NOTE,
      id,
    });
  };

  const doneNote = (id) => {
    dispatch({
      type: DONE_NOTE,
      id,
    });
  };

  return (
    <NoteContext.Provider
      value={{
        notesState: state,
        addNote,
        editNote,
        deleteNote,
        doneNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
