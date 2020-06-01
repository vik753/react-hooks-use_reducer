import { ADD_NOTE, DELETE_NOTE, DONE_NOTE, EDIT_NOTE } from "./types";

const noteReducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case ADD_NOTE: {
      // console.log("ADD_MOTE");
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.note.id]: action.note,
        },
      };
    }
    case DELETE_NOTE: {
      // console.log("DELETE_NOTE");
      const newState = { ...state };
      delete newState.notes[action.id];
      return { ...newState };
    }
    case DONE_NOTE: {
      // console.log("DONE_NOTE", state.notes[action.id].done);
      const newState = { ...state };
      newState.notes[action.id].done = !newState.notes[action.id].done;
      return { ...newState };
    }
    default: {
      // console.log("defaultReducer");
      return state;
    }
  }
};

export default noteReducer;
