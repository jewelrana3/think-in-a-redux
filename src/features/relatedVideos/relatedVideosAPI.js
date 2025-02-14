import dataInstance from "../../utilis/axios";

// http://localhost:9000/videos?tags_like=react&tags_like=tips&id_ne=2

export const getRelatedVideos = async ({ tags, id }) => {
  console.log({ tags, id });
  const limit = 5;
  let queryString =
    tags.length > 0
      ? tags.map((tag) => `tag_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`;

  const responsive = await dataInstance.get(`/videos?${queryString}`);
  return responsive.data;
};
