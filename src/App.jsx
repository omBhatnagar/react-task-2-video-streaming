import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Recommended from "./components/recommended/recommended";
import SearchPage from "./components/recommended/searchpage/searchpage";

function App() {
	return (
		<div className='bg-yt-black'>
			<Navbar />
			<Outlet></Outlet>
		</div>
	);
}

export default App;
