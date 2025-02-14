import dataInstance from "../../utilis/axios";

export const getTags = async () => {
  const responsive = await dataInstance.get("/tags");
  return responsive.data;
};
