import { BiMessageSquareError } from "react-icons/bi";
import Layout from "../layout/layout";

const Error = () => {
	return (
		<Layout>
			<div className='flex flex-col justify-center items-center h-screen gap-8'>
				<BiMessageSquareError className='text-gray-600 text-3xl' />
				<p className='text-gray-600 text-xl'>Uh oh... Something went wrong!</p>
			</div>
		</Layout>
	);
};

export default Error;
