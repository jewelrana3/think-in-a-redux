import axios from "axios";

const videosInstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default videosInstance;
