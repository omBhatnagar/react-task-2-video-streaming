import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchVideos } from "../../../api/youtube";
import createSearchVideoRows from "../../../utils/createSearchVideoRows";
import Layout from "../../layout/layout";
import SearchRow from "../../searchrow/searchrow";
import SearchRowSkeleton from "../../searchrowskeleton/searchrowskeleton";

const SearchPage = () => {
	const { searchQuery } = useParams();

	const [searchResults, sestSearchResuls] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const dummyData = [
		{
			views: "10000",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias magnam quo beatae aperiam temporibus numquam a, quae facere consequatur incidunt, hic consequuntur. Similique, minus distinctio delectus voluptatem adipisci explicabo!",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias magnam quo beatae aperiam temporibus numquam a, quae facere consequatur incidunt, hic consequuntur. Similique, minus distinctio delectus voluptatem adipisci explicabo!",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias magnam quo beatae aperiam temporibus numquam a, quae facere consequatur incidunt, hic consequuntur. Similique, minus distinctio delectus voluptatem adipisci explicabo!",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias magnam quo beatae aperiam temporibus numquam a, quae facere consequatur incidunt, hic consequuntur. Similique, minus distinctio delectus voluptatem adipisci explicabo!",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias magnam quo beatae aperiam temporibus numquam a, quae facere consequatur incidunt, hic consequuntur. Similique, minus distinctio delectus voluptatem adipisci explicabo!",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
	];

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
			<div className='text-white'>
				{isLoading
					? Array(10).fill(<SearchRowSkeleton />)
					: searchResults.map((item) => (
							<SearchRow
								title={item.title}
								image={item.image}
								views={item.views}
								timestamp={item.timestamp}
								channel={item.channel}
								channelImage={item.channelImage}
								description={item.description}
							/>
					  ))}
			</div>
		</Layout>
	);
};

export default SearchPage;
