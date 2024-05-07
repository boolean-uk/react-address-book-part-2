import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/router.jsx";
import { AuthCtxProvider } from "./stores/auth/auth-store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthCtxProvider>
			<Router />
		</AuthCtxProvider>
	</React.StrictMode>
);
