import Navbar from "../navbar/navbar";

const Layout = ({ children, ...props }) => {
	console.log({ props });
	return (
		<div className=''>
			<Navbar props={props} />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
