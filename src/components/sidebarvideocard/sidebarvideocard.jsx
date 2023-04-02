const SideBardVideoCard = ({ image, title, channel, views, timestamp }) => {
	return (
		<div className='flex justify-center items-start w-full gap-1 my-2'>
			<div>
				<img src={image} alt='' />
			</div>
			<div>
				<h3 className='font-semibold text-md text-white'>{title}</h3>
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
