import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchVideos } from "../../api/youtube";

import createSearchVideoRows from "../../utils/createSearchVideoRows";

import Layout from "../../components/layout/layout";
import SearchRow from "../../components/searchrow/searchrow";
import SearchRowSkeleton from "../../components/searchrowskeleton/searchrowskeleton";
import Error from "../../components/error/error";

const SearchPage = () => {
	const { searchQuery } = useParams();

	const [searchResults, sestSearchResuls] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		sestSearchResuls([]);
		(async () => {
			setIsLoading(true);
			const response = await searchVideos(searchQuery);
			if (response instanceof Array || response.data.items.length < 1) {
				setIsError(true);
				setIsLoading(false);
			} else {
				const _searchResults = await createSearchVideoRows(response.data.items);
				sestSearchResuls(_searchResults);
				setIsLoading(false);
			}
		})();
	}, [searchQuery]);

	if (isError) return <Error />;

	return (
		<Layout>
			<div className='text-white w-11/12 lg:w-5/6 mx-auto'>
				{isLoading
					? Array(10).fill(<SearchRowSkeleton />)
					: searchResults.map((item, index) => (
							<Link to={`/video/${item.videoId}`} key={index}>
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
