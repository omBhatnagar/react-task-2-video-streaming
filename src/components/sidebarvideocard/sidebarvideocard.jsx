const SideBardVideoCard = ({ image, title, channel, views, timestamp }) => {
	return (
		<div className='flex justify-center items-start w-full gap-2 my-2'>
			<div className='w-1/2 flex justify-center items-center relative'>
				<img src={image} alt='' className='rounded-lg min-w-full min-h-full' />
			</div>
			<div className='w-2/3'>
				<h3 className='font-semibold text-sm text-white'>{title}</h3>
				<div className='mt-2'>
					<div className='text-gray-400 text-sm'>{channel}</div>
					<p className='text-gray-400 text-sm'>
						{views} views • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SideBardVideoCard;
