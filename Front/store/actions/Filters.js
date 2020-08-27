import { SET_FILTERS } from "../constants";
import axios from "axios";

const Filters = (obj) => ({
  type: SET_FILTERS,
  obj
});

export const setFilters = (obj) => (dispatch) => dispatch(Filters(obj))

