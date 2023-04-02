import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const VideoDetails = ({
	title,
	description,
	publishedDate,
	channelTitle,
	channelImage,
	viewCount,
	likeCount,
	dislikeCount,
	subs,
}) => {
	return (
		<div className='flex flex-col justify-cetner items-start gap-4 my-6'>
			<h1 className='text-white font-semibold text-xl'>{title}</h1>
			<div className='flex justify-between items-center pb-2 w-full'>
				<div className='flex justify-center items-start gap-4'>
					<div className='flex-shrink-0 w-11 h-11 rounded-full overflow-hidden bg-white'>
						<img src={channelImage} alt='' />
					</div>
					<div>
						<div className='flex items-baseline space-x-1'>
							<div className='text-white font-semibold text-md'>
								{channelTitle}
							</div>
						</div>
						<div className='text-gray-400 text-sm'>{subs} subscribers</div>
					</div>
					<div>
						<button className='bg-white px-4 py-2 rounded-3xl text-sm font-semibold'>
							Subscribe
						</button>
					</div>
				</div>
				<div className='flex justify-center items-center gap-4 font-semibold text-white'>
					<div className='flex justify-center items-center bg-[#272727] rounded-3xl  px-4 py-2'>
						<div className='flex justify-center items-center gap-1 pr-2'>
							<BsHandThumbsUp />
							<div>{likeCount}</div>
						</div>
						<div className='flex justify-center items-center gap-1 border-l border-[#3c3c3c] pl-2'>
							<BsHandThumbsDown />
							<div>{dislikeCount}</div>
						</div>
					</div>
					<div className='flex justify-center items-center bg-[#272727] rounded-3xl px-4 py-2'>
						<div className='flex justify-center items-center gap-2'>
							<RiShareForwardLine />
							Share
						</div>
					</div>
					<div className='flex justify-center items-center bg-[#272727] rounded-3xl px-4 py-2'>
						<div className='flex justify-center items-center gap-2'>
							<MdOutlinePlaylistAdd />
							Save
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#272727] text-white rounded-lg p-2 w-full'>
				<p className='font-semibold'>
					{viewCount} views {publishedDate}
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default VideoDetails;
