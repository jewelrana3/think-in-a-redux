import axios from "axios";
import videosInstance from "../../utilis/axios";

export const getFetch = async () => {
  const responsive = await axios.get(videosInstance());
  return responsive.data;
};
