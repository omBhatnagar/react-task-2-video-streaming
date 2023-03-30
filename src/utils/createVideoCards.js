import { getChannelDetails } from "../api/youtube";
import formatRelativeDate from "./formatRelativeDate";

const createVideoCards = async (videoItems) => {
	let newVideoCards = [];
	for (const video of videoItems) {
		const videoId = video.id;
		const snippet = video.snippet;
		const channelId = snippet.channelId;

		const response = await getChannelDetails(channelId);
		const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

		const title = snippet.title;
		const image = snippet.thumbnails.medium.url;
		const views = video.statistics.viewCount;
		const timestamp = formatRelativeDate(new Date(snippet.publishedAt));
		const channel = snippet.channelTitle;

		newVideoCards.push({
			videoId,
			image,
			title,
			channel,
			views,
			timestamp,
			channelImage,
		});
	}
	return newVideoCards;
};

export default createVideoCards;
