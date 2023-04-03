import { useEffect, useState } from "react";

import { getRecommended } from "../../api/youtube";
import createVideoCards from "../../utils/createVideoCards";
import Layout from "../../components/layout/layout";
import SkeletonCard from "../../components/skeletoncard/skeletoncard";
import VideoCard from "../../components/videocard/videocard";
import { Link } from "react-router-dom";

const Recommended = () => {
	const [videoCards, setVideoCards] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const response = await getRecommended();
			const _videoCards = await createVideoCards(response.data.items);
			setVideoCards(_videoCards);
			setIsLoading(false);
		})();
	}, []);

	return (
		<Layout>
			<div className='w-11/12 mx-auto flex flex-wrap justify-center items-stretch gap-4'>
				{isLoading
					? Array(10).fill(<SkeletonCard />)
					: videoCards.map((video) => (
							<Link to={`/video/${video.videoId}`} className='w-[28%]'>
								<VideoCard
									key={video.id}
									image={video.image}
									title={video.title}
									channel={video.channel}
									views={video.views}
									timestamp={video.timestamp}
									channelImage={video.channelImage}
								/>
							</Link>
					  ))}
			</div>
		</Layout>
	);
};

export default Recommended;
