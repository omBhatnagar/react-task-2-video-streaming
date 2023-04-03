import { getChannelDetails, getVideoStats } from "../api/youtube";
import formatRelativeDate from "./formatRelativeDate";

const createSearchVideoRows = async (videos) => {
	let newVideoRows = [];
	for (const video of videos) {
		const videoId = video.id.videoId;
		const response = await getVideoStats(videoId);
		const views = response.data.items[0].statistics.viewCount;

		const snippet = video.snippet;
		const title = snippet.title;

		const timestamp = formatRelativeDate(new Date(snippet.publishedAt));

		const channel = snippet.channelTitle;
		const channelId = snippet.channelId;

		const channelIdResp = await getChannelDetails(channelId);
		const channelImage =
			channelIdResp.data.items[0].snippet.thumbnails.medium.url;

		const description = snippet.description;
		const image = snippet.thumbnails.medium.url;

		newVideoRows.push({
			videoId,
			title,
			image,
			views,
			timestamp,
			channel,
			channelImage,
			description,
		});
	}
	return newVideoRows;
};

export default createSearchVideoRows;
