import { useEffect, useState } from "react";

import { getRecommended } from "../../api/youtube";
import createVideoCards from "../../utils/createVideoCards";

const Recommended = () => {
	const [videoCards, setVideoCards] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const response = await getRecommended();
			const _videoCards = await createVideoCards(response.data.items);
			console.log(_videoCards);
			setVideoCards(_videoCards);
			setIsLoading(false);
		})();
	}, []);

	return <div></div>;
};

export default Recommended;
