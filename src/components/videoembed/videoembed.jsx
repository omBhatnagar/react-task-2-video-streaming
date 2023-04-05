import { useEffect, useState } from "react";
import Youtube from "react-youtube";

const VideoEmbed = ({ videoId }) => {
	const [opts, setOpts] = useState({
		height: "480",
		width: "920",
	});

	useEffect(() => {
		let width = window.innerWidth;
		let newWidth;
		let newHeight;

		if (width < 1280) {
			setOpts({ width: width, height: (width * 9) / 16 }); //Height is set accordingly to maintain 16:9 aspect ratio
		} else {
			newWidth = width - (34 / 100) * width;
			newHeight = (newWidth * 9) / 16;
			setOpts({ width: newWidth, height: newHeight });
		}
	}, []);

	return (
		<div>
			<Youtube videoId={videoId} opts={opts} />
		</div>
	);
};

export default VideoEmbed;
