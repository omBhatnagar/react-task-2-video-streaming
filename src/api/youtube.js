import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_ACCESS_KEY;

export const getRecommended = async () => {
	try {
		// const response = await axios.get(
		// 	`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${API_KEY}`,
		// );
		// return response;
		return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getChannelDetails = async (channelId) => {
	try {
		// const response = await axios.get(
		// 	`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`,
		// );
		// return response;
		return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};
