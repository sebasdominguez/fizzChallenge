import { SET_FILTERS } from "../constants";

const initialState = {
  selected: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...state, selected: action.obj };
    default:
      return state;
  }
};
