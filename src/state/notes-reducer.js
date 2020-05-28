const initialState = {
  notes: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      return {
        notes: {
          ...state.notes,
          [action.note.id]: action.note
        }
      }
    default:
      return state;
  }
};

export { initialState, reducer };
