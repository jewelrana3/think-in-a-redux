import dataInstance from "../../utilis/axios";

export const getVideo = async (id) => {
  console.log(id);
  const responsive = await dataInstance.get(`/videos/${id}`);
  return responsive.data;
};
