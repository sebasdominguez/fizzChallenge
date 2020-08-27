import { FETCH_BODY } from "../constants";
import axios from "axios";

const Body = (data) => ({
  type: FETCH_BODY,
  data
});

export const fetchBody = () => (dispatch) => {
  return axios
    .get("http://remote.fizzmod.com/body.json")
    .then((resp) => dispatch(Body(resp.data)))
    .catch((err) => console.log("error: ",err))
}


