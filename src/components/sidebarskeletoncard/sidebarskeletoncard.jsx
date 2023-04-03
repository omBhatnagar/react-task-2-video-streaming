const SideBarSkeletonCard = () => {
	return (
		<div>
			<div className='flex justify-center items-start gap-4 my-2 animate-pulse'>
				<div alt='' className='rounded-xl w-56 h-28 bg-gray-600' />
				<div className='flex flex-col justify-start items-start gap-2 grow'>
					<div>
						<div className='bg-gray-600 w-32 h-3 mt-2 mb-2'></div>
					</div>

					<div className='flex items-baseline space-x-1'>
						<div className='bg-gray-600 w-16 h-2'></div>
					</div>

					<div className='bg-gray-600 w-28 h-2'></div>
				</div>
			</div>
		</div>
	);
};

export default SideBarSkeletonCard;
