import { FETCH_MENU } from "../constants";
import axios from "axios";

const Categories = (data) => ({
  type: FETCH_MENU,
  data
});

export const fetchMenu = () => (dispatch) => {
  return axios
    .get("http://remote.fizzmod.com/menu.json")
    .then((resp) => dispatch(Categories(resp.data.menu.categories)))
    .catch((err) => console.log("error: ",err))
}

