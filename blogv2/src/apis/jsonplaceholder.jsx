import axios from "axiox";

export const jsonplaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
