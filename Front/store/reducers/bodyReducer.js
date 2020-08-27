import { FETCH_BODY } from "../constants";

const initialState = {
  slider: [],
  products: [],
  filters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BODY':
      return { 
      	...state, 
      	slider: action.data.slides, 
      	products: action.data.products, 
      	filters:action.data.filters 
      };
    default:
      return state;
  }
};

