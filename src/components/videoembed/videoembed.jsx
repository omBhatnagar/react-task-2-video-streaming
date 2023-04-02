import Youtube from "react-youtube";

const VideoEmbed = ({ videoId }) => {
	return (
		<div>
			<Youtube videoId={videoId} />
		</div>
	);
};

export default VideoEmbed;
