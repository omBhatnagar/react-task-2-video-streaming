const SearchRowSkeleton = () => {
	return (
		<div>
			<div className='w-2/3 mx-auto flex justify-center items-start gap-4 mb-6 animate-pulse'>
				<div alt='' className='rounded-xl w-64 h-36 bg-gray-600' />
				<div className='flex flex-col justify-start items-start gap-2 grow'>
					<div>
						<div className='font-semibold text-xl bg-gray-600 w-40 h-3 mt-2'></div>
						<div className='bg-gray-600 w-32 h-2 mt-2 mb-6'></div>
					</div>
					<div className='flex justify-center items-center gap-2'>
						<div className='flex-shrink-0 w-6 h-6 rounded-full overflow-hidden bg-gray-600'></div>
						<div className='flex items-baseline space-x-1'>
							<div className='bg-gray-600 w-16 h-2'></div>
						</div>
					</div>
					<div className='bg-gray-600 w-48 h-2 mt-4'></div>
				</div>
			</div>
		</div>
	);
};

export default SearchRowSkeleton;
