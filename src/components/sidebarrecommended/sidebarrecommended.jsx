import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { searchVideos } from "../../api/youtube";
import createSearchVideoRows from "../../utils/createSearchVideoRows";

import SideBarSkeletonCard from "../sidebarskeletoncard/sidebarskeletoncard";
import SideBardVideoCard from "../sidebarvideocard/sidebarvideocard";

const SideBarRecommended = ({ title }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videDetails, setVideoDetails] = useState([]);

	useEffect(() => {
		(async () => {
			console.log({ title });
			setIsLoading(true);
			const response = await searchVideos(title);
			const _searchResults = await createSearchVideoRows(response.data.items);
			console.log({ _searchResults });
			setVideoDetails(_searchResults);
			setIsLoading(false);
		})();
	}, [title]);

	return (
		<div>
			{isLoading
				? Array(10).fill(<SideBarSkeletonCard />)
				: videDetails.map((item) => (
						<Link to={`/video/${item.videoId}`} key={item.videoId}>
							<SideBardVideoCard
								views={item.views}
								timestamp={item.timestamp}
								channel={item.channel}
								title={item.title}
								image={item.image}
							/>
						</Link>
				  ))}
		</div>
	);
};

export default SideBarRecommended;
