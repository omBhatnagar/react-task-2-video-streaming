import { useEffect, useState, useRef, useCallback } from "react";

import { getRecommended } from "../../api/youtube";
import createVideoCards from "../../utils/createVideoCards";
import Layout from "../../components/layout/layout";
import SkeletonCard from "../../components/skeletoncard/skeletoncard";
import VideoCard from "../../components/videocard/videocard";
import { Link } from "react-router-dom";
import Error from "../../components/error/error";

const Recommended = () => {
  const [videoCards, setVideoCards] = useState([]);
  const [loadIndex, setLoadIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const listRef = useRef(null);

  const getRecommendedVideos = useCallback(async () => {
    setIsLoading(true);
    const response = await getRecommended(loadIndex);

    if (response instanceof Array || response.data.items.length < 1) {
      setIsError(true);
      setIsLoading(false);
    } else {
      const _videoCards = await createVideoCards(response.data.items);
      console.log(_videoCards);
      setVideoCards(_videoCards);
      setIsLoading(false);
      setIsError(false);
    }
  }, [loadIndex]);

  useEffect(() => {
    getRecommendedVideos();
  }, [getRecommendedVideos]);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      console.log("in use effect", listElement);
      listElement.addEventListener("scroll", handleScroll);
    }
    return () => listElement?.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = async () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      const bottom = Math.floor(scrollHeight - scrollTop) === clientHeight;
      console.log({ bottom });
      if (bottom) {
        console.log("hit bottom");
        setLoadIndex((prevLoadIndex) => (prevLoadIndex += 1));
        await getRecommendedVideos();
      }
    }
  };

  if (isError) return <Error />;

  return (
    <Layout>
      <div
        className='w-11/12 mx-auto flex flex-wrap justify-center items-stretch gap-4 h-[87vh] overflow-auto'
        ref={listRef}
      >
        {videoCards.map((video) => (
          <Link
            to={`/video/${video.videoId}`}
            className='sm:w-5/6 sm:min-w-5/6 lg:w-[28%]'
            key={video.id}
          >
            <VideoCard
              image={video.image}
              title={video.title}
              channel={video.channel}
              views={video.views}
              timestamp={video.timestamp}
              channelImage={video.channelImage}
            />
          </Link>
        ))}
        {isLoading ? Array(10).fill(<SkeletonCard />) : null}
      </div>
    </Layout>
  );
};

export default Recommended;
