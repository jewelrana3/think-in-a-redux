import axios from "axios";

const videosInstance = axios.create({
  baseURL: "http://locahost:9000",
});

export default videosInstance;
