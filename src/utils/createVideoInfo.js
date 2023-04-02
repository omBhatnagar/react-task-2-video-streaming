import { getDetailedChannelDetails } from "../api/youtube";

const createVideoInfo = async (video) => {
	const snippet = video.snippet;
	const stats = video.statistics;
	console.log(video.statistics);
	const channelId = snippet.channelId;
	const response = await getDetailedChannelDetails(channelId);

	const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
	const subs = response.data.items[0].statistics.subscriberCount;
	const publishedDate = new Date(snippet.publishedAt).toLocaleDateString(
		"en-GB",
		{
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	);
	const title = snippet.title;
	const description = snippet.description;
	const channelTitle = snippet.channelTitle;
	const viewCount = stats.viewCount;
	const likeCount = stats.likeCount;
	const dislikeCount = stats.dislikeCount;

	return {
		title,
		description,
		publishedDate,
		channelTitle,
		channelImage,
		viewCount,
		likeCount,
		dislikeCount,
		subs,
	};
};

export default createVideoInfo;
