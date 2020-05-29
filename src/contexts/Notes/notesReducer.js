import { ADD_NOTE } from "../types";

export const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
