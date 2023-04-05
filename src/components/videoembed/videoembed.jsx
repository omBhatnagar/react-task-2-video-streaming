import { useEffect, useState } from "react";
import Youtube from "react-youtube";

const VideoEmbed = ({ videoId }) => {
	const [opts, setOpts] = useState({
		height: "480",
		width: "920",
	});

	const updateVideoPlayerDimensions = () => {
		let width = window.innerWidth;
		// if (width < 1235) setOpts({ width: "720", height: "380" });
		// if (width < 1235) setOpts({ width: "720", height: "380" });
		// if (width < 1280) setOpts({ width: "1020", height: "480" });
		// if (width < 1390) setOpts({ width: "820", height: "480" });
	};

	useEffect(() => {
		let width = window.innerWidth;
		if (width < 1280) {
			setOpts({ width: String(width), height: "480" });
		} else
			setOpts({ width: String(width - (34 / 100) * width), height: "740" });
		window.addEventListener("resize", updateVideoPlayerDimensions);
		return () =>
			window.removeEventListener("resize", updateVideoPlayerDimensions);
	}, []);

	return (
		<div>
			<Youtube videoId={videoId} opts={opts} />
		</div>
	);
};

export default VideoEmbed;
