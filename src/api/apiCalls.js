import axios from "axios";
import { baseUrl } from "../config/baseUrl";

export const getCalls = (title) => {
  return axios
    .get(`${baseUrl}t=${title}`)
    .then(res => res.data)
    .catch(err => console.log(err));
};
