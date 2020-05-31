import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "./types";

const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.note.id]: action.note,
        },
      };
    case DELETE_NOTE:
      console.log("deleteNote");
      let newState = { ...state };
      delete newState.notes[action.id];
      return { ...newState };
    default:
      console.log("default");
      return state;
  }
};

export default noteReducer;
