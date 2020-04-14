import axios from "axios";

export default axios.create({
  //creates customizable copy of axios request
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZtOl_qhmUpn376dLX5G5jrjN3PD3avlVCxzh8ygxu4c",
  },
});
