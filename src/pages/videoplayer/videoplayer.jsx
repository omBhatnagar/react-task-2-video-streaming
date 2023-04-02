import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoStats } from "../../api/youtube";
import Layout from "../../components/layout/layout";
import SideBarRecommended from "../../components/sidebarrecommended/sidebarrecommended";

import VideoDetails from "../../components/videodetails/videodetails";
import VideoEmbed from "../../components/videoembed/videoembed";
import createVideoInfo from "../../utils/createVideoInfo";

const VideoPlayer = () => {
	const { videoId } = useParams();

	const [videoInfo, setVideoInfo] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setVideoInfo([]);
			setIsLoading(true);
			const response = await getVideoStats(videoId);
			const _videoInfo = await createVideoInfo(response.data.items[0]);
			console.log(_videoInfo);
			setVideoInfo(_videoInfo);
		})();
	}, [videoId]);

	const dummyData = {
		title: "TEST TITLE",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quaerat laboriosam voluptas. Labore voluptatem pariatur accusantium et libero deserunt autem, corporis nulla quaerat adipisci debitis. Consequatur vel rerum aspernatur qui!",
		publishedDate: "20 Oct 2023",
		channelTitle: "test channel",
		channelImage:
			"https://yt3.ggpht.com/qsuzLDGZ9P2lVK2RCmzYo78zWO8PtoaevySKQmQEnv874EXyq8CtwPn64n2T3grp6KXJSnOt=s240-c-k-c0x00ffffff-no-rj",
		viewCount: "20K",
		likeCount: "1K",
		dislikeCount: "959",
		subs: "1.2K",
	};

	return (
		<Layout>
			<div className='flex justify-center items-center gap-2'>
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
					<SideBarRecommended />
				</div>
			</div>
		</Layout>
	);
};

export default VideoPlayer;
