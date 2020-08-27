import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import menuReducer from "./reducers/menuReducer";
import bodyReducer from "./reducers/bodyReducer";
import filtersReducer from "./reducers/filtersReducer";
import history from '../utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = { 
  menuReducer, 
  bodyReducer,
  filtersReducer
}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}




