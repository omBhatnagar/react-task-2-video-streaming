const SearchRow = ({
	views,
	description,
	timestamp,
	channel,
	channelImage,
	title,
	image,
}) => {
	return (
		<div className='w-2/3 mx-auto flex justify-center items-start gap-4 mb-6'>
			<img src={image} alt='' className='rounded-xl' />
			<div className='flex flex-col justify-start items-start gap-2 grow'>
				<div>
					<h3 className='font-semibold text-xl'>{title}</h3>
					<p className='text-gray-400 text-sm'>
						{views} views • {timestamp}
					</p>
				</div>
				<div className='flex justify-center items-center gap-2'>
					<div className='flex-shrink-0 w-6 h-6 rounded-full overflow-hidden bg-white'>
						<img src={channelImage} alt='' />
					</div>
					<div className='flex items-baseline space-x-1'>
						<div className='text-gray-400 text-sm'>{channel}</div>
					</div>
				</div>
				<p className='text-gray-400 text-sm'>{description}</p>
			</div>
		</div>
	);
};

export default SearchRow;
