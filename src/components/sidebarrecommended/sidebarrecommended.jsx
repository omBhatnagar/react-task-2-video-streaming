import SideBardVideoCard from "../sidebarvideocard/sidebarvideocard";

const SideBarRecommended = () => {
	const dummyData = [
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
		{
			views: "10000",
			timestamp: "2 day(s) ago",
			channel: "test",
			title: "Test video",
			image: "https://i.ytimg.com/vi/XqRDWKSXg2Y/mqdefault.jpg",
		},
	];

	return (
		<div>
			{dummyData.map((item) => (
				<SideBardVideoCard
					views={item.views}
					timestamp={item.timestamp}
					channel={item.channel}
					title={item.title}
					image={item.image}
				/>
			))}
		</div>
	);
};

export default SideBarRecommended;
