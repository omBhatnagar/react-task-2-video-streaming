const VideoCard = ({
	image,
	title,
	channel,
	views,
	timestamp,
	channelImage,
}) => {
	return (
		<div className='bg-yt-black w-[28%] flex justify-center items-center'>
			<div className='w-full'>
				<div className='flex justify-center items-center overflow-hidden rounded-2xl'>
					<img className='shrink-0 min-w-full min-h-full' src={image} alt='' />
				</div>
				<div className='mt-3 flex items-start space-x-2'>
					<div className='flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white'>
						<img src={channelImage} alt='' />
					</div>
					<div className='flex flex-col text-md tracking-tighter leading-tight'>
						<div className='text-white overflow-ellipsis'>{title}</div>
						<div className='mt-1 flex items-baseline space-x-1'>
							<div className='text-gray-400'>{channel}</div>
						</div>
						<div className='text-gray-400'>
							{views} views • {timestamp}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
