import axios from "axios";

const BASE_URL = "https://vidsrc.xyz/embed";

export const listMovies = async () => {
	const pageNumber = 1;
	try {
		const response = await axios.get(
			`${BASE_URL}/movies/latest/page-${pageNumber}.json`,
		);
		return response;
	} catch (error) {
		console.log(error);
		return [];
	}
};
