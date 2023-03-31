import VideoDetails from "../../components/videodetails/videodetails";

const VideoPlayer = () => {
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
		<div>
			<VideoDetails
				title={dummyData.title}
				description={dummyData.description}
				publishedDate={dummyData.publishedDate}
				channelTitle={dummyData.channelTitle}
				channelImage={dummyData.channelImage}
				viewCount={dummyData.viewCount}
				likeCount={dummyData.likeCount}
				dislikeCount={dummyData.dislikeCount}
				subs={dummyData.subs}
			/>
		</div>
	);
};

export default VideoPlayer;
