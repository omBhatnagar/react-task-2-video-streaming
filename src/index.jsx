import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Recommended from "./pages/recommended/recommended";
import SearchPage from "./pages/searchpage/searchpage";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
