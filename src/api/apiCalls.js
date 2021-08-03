import axios from "axios";
import { baseUrl } from "../config/baseUrl";

export const postCall = payload => {
  return axios.post(`${baseUrl}/return`, payload);
};

export const getCalls = () => {
  return axios.get(`${baseUrl}/api/articles`);
};

export const getCall = articleSlug => {
  return axios.get(`${baseUrl}/api/articles/${articleSlug}`);
};
