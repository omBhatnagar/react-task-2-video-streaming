import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recommended from "./components/recommended/recommended";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Recommended />,
	},
]);

function App() {
	return (
		<div className='bg-yt-black'>
			<h1>NAVBAR</h1>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
