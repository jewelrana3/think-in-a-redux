import dataInstance from "../../utilis/axios";

export const getVideos = async () => {
  const responsive = await dataInstance.get("/videos");
  return responsive.data;
};
