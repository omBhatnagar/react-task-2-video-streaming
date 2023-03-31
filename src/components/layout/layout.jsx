import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
	return (
		<div className='w-5/6 mx-auto '>
			<Navbar />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
