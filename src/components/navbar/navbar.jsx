import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";

const Navbar = () => {
	return (
		<div className='py-3 sticky top-0 bg-yt-black z-10'>
			<div className='flex justify-start items-center w-5/6 mx-auto'>
				<div className='w-1/4'>
					<Link to='/'>
						<h1 className='text-xl font-bold text-white tracking-tight'>
							Youtube
						</h1>
					</Link>
				</div>
				<div className='w-1/2'>
					<SearchBar />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
