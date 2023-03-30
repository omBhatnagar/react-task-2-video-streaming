import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recommended from "./components/recommended/recommended";
import SearchPage from "./components/recommended/searchpage/searchpage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Recommended />,
	},
	{
		path: "/search/:searchQuery",
		element: <SearchPage />,
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
