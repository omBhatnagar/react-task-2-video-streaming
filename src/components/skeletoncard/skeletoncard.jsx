const SkeletonCard = () => {
	return (
		<div className='bg-yt-black w-[25%] flex justify-center items-center'>
			<div className='w-full animate-pulse'>
				<div className='flex justify-center items-center overflow-hidden rounded-2xl'>
					<div className='shrink-0 w-80 h-56 rounded-2xl bg-gray-600'></div>
				</div>
				<div className='mt-3 flex items-start space-x-2'>
					<div className='flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white mt-1'>
						<div className='w-9 h-9 bg-gray-600 rounded-full' />
					</div>
					<div className='flex flex-col text-md tracking-tighter leading-tight animate-pulse'>
						<div className='bg-gray-600 w-60 h-4 rounded-sm'></div>
						<div className='mt-2 flex items-baseline space-x-1'>
							<div className='bg-gray-600 w-32 h-2'></div>
						</div>
						<div className='bg-gray-600 w-20 h-2 mt-1'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonCard;
