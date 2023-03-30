import { useEffect, useState } from "react";

import { getRecommended } from "../../api/youtube";
import createVideoCards from "../../utils/createVideoCards";
import SkeletonCard from "./skeletoncard/skeletoncard";
import VideoCard from "./videocard/videocard";

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
		<div className='w-5/6 mx-auto flex flex-wrap justify-center items-stretch gap-4'>
			{isLoading
				? Array(10).fill(<SkeletonCard />)
				: videoCards.map((video) => (
						<VideoCard
							key={video.id}
							image={video.image}
							title={video.title}
							channel={video.channel}
							views={video.views}
							timestamp={video.timestamp}
							channelImage={video.channelImage}
						/>
				  ))}
		</div>
	);
};

export default Recommended;
