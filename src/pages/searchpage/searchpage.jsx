import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchVideos } from "../../api/youtube";

import createSearchVideoRows from "../../utils/createSearchVideoRows";

import Layout from "../../components/layout/layout";
import SearchRow from "../../components/searchrow/searchrow";
import SearchRowSkeleton from "../../components/searchrowskeleton/searchrowskeleton";

const SearchPage = () => {
	const { searchQuery } = useParams();

	const [searchResults, sestSearchResuls] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		sestSearchResuls([]);
		(async () => {
			setIsLoading(true);
			const response = await searchVideos(searchQuery);
			const _searchResults = await createSearchVideoRows(response.data.items);
			sestSearchResuls(_searchResults);
			setIsLoading(false);
		})();
	}, [searchQuery]);

	return (
		<Layout>
			<div className='text-white w-11/12 mx-auto'>
				{isLoading
					? Array(10).fill(<SearchRowSkeleton />)
					: searchResults.map((item) => (
							<Link to={`/video/${item.videoId}`}>
								<SearchRow
									title={item.title}
									image={item.image}
									views={item.views}
									timestamp={item.timestamp}
									channel={item.channel}
									channelImage={item.channelImage}
									description={item.description}
								/>
							</Link>
					  ))}
			</div>
		</Layout>
	);
};

export default SearchPage;
