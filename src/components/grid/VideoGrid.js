import { useSelector, useDispatch } from "react-redux";

import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { isLoading, isError, videos, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && videos.length === 0) {
    content = <div className="col-span-12">data not found</div>;
  }

  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
}
