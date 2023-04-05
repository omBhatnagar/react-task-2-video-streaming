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
		<div className='w-full lg:w-2/3 mx-auto flex flex-col sm:flex-row justify-start items-center sm:justify-center sm:items-start gap-4 mb-6'>
			<div className='flex w-full sm:w-1/2'>
				<img
					src={image}
					alt=''
					className='rounded-xl flex-grow sm:max-w-full sm:max-h-full'
				/>
			</div>
			<div className='flex flex-col justify-start items-start gap-2 grow w-full sm:w-1/2 px-1 sm:px-0'>
				<div>
					<h3 className='font-semibold text-md sm:text-xl'>{title}</h3>
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
				<p className='text-gray-400 text-sm hidden sm:block'>{description}</p>
			</div>
		</div>
	);
};

export default SearchRow;
