import axios from "axios";

const dataInstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default dataInstance;
