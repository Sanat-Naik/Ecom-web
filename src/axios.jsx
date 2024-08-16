import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:52680/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
