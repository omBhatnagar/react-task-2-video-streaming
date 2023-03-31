import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
	const navigate = useNavigate();

	const [searchQuery, setSearchQuery] = useState("");

	const redirect = (e) => {
		if (e.key !== "Enter") return;
		navigate(`/search/${searchQuery}`);
	};

	return (
		<div
			onClick={redirect}
			className='flex justify-between items-stretch w-1/2 mt-3 mb-6 rounded-3xl border border-[#303030] overflow-hidden'
		>
			<input
				type='text'
				className='bg-[#121212] flex-grow pl-4 py-2 text-gray-300 focus:outline-none'
				placeholder='Search'
				value={searchQuery}
				onKeyDown={redirect}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<Link
				to={`/search/${searchQuery}`}
				className='bg-[#222222] flex items-center px-6 cursor-pointer'
			>
				<BsSearch className='text-white' />
			</Link>
		</div>
	);
};

export default SearchBar;
