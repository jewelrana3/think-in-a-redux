import videosInstance from "../../utilis/axios";

export const getFetch = async () => {
  const responsive = await videosInstance.get("/videos");
  return responsive.data;
};
