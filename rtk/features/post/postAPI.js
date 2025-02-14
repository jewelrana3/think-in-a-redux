export const fetchPostApi = async () => {
  const responsive = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  return responsive.json();
};
