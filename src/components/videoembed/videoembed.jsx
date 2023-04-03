import Youtube from "react-youtube";

const VideoEmbed = ({ videoId }) => {
	const opts = {
		height: "480",
		width: "920",
	};
	return (
		<div>
			<Youtube videoId={videoId} opts={opts} />
		</div>
	);
};

export default VideoEmbed;
