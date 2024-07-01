import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";

const Navbar = ({ props }) => {
	const { isMovies, setIsMovies } = props;
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
				<div className='w-1/4'>
					<label className='inline-flex items-center cursor-pointer float-right'>
						<input
							type='checkbox'
							value={isMovies}
							className='sr-only peer'
							onChange={() => {
								setIsMovies((prevIsMovies) => !prevIsMovies);
							}}
						/>
						<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
							Movies
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
