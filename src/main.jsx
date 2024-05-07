import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
