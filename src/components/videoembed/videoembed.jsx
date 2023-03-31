import Youtube from "react-youtube";

const VideoEmbed = ({ videoId }) => {
	return (
		<div>
			<Youtube width={740} videoId={videoId} />
		</div>
	);
};

export default VideoEmbed;
