import axios from "axios";
import qs from "query-string";

const httpCLient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    amount: 15,
  };
  const finalyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpCLient.get(`/users?${qs.stringify(finalyOptions)}`);
};
