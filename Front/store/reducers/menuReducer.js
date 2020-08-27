import { FETCH_MENU } from "../constants";

const initialState = {
  categories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MENU':
      return { ...state, categories: action.data };
    default:
      return state;
  }
};
