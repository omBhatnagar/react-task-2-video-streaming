import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getVideoStats } from "../../api/youtube";

import Layout from "../../components/layout/layout";
import SideBarRecommended from "../../components/sidebarrecommended/sidebarrecommended";
import Error from "../../components/error/error";

import VideoDetails from "../../components/videodetails/videodetails";
import VideoEmbed from "../../components/videoembed/videoembed";
import createVideoInfo from "../../utils/createVideoInfo";

const VideoPlayer = () => {
	const { videoId } = useParams();

	const [videoInfo, setVideoInfo] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		(async () => {
			setVideoInfo([]);
			setIsLoading(true);
			const response = await getVideoStats(videoId);

			if (response instanceof Array) {
				setIsError(true);
				setIsLoading(false);
			} else {
				const _videoInfo = await createVideoInfo(response.data.items[0]);
				setVideoInfo(_videoInfo);
				setIsLoading(false);
			}
		})();
	}, [videoId]);

	if (isError) return <Error />;

	return (
		<Layout>
			{!isLoading && (
				<div className='flex justify-center items-start gap-3'>
					<div className='w-2/3'>
						<VideoEmbed videoId={videoId} />
						<VideoDetails
							title={videoInfo.title}
							description={videoInfo.description}
							publishedDate={videoInfo.publishedDate}
							channelTitle={videoInfo.channelTitle}
							channelImage={videoInfo.channelImage}
							viewCount={videoInfo.viewCount}
							likeCount={videoInfo.likeCount}
							dislikeCount={videoInfo.dislikeCount}
							subs={videoInfo.subs}
						/>
					</div>
					<div className='w-1/4'>
						<SideBarRecommended title={videoInfo.title} />
					</div>
				</div>
			)}
		</Layout>
	);
};

export default VideoPlayer;
