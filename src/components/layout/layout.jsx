import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
	return (
		<div className='w-11/12 mx-auto '>
			<Navbar />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
