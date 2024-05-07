import { Outlet, useNavigate } from "react-router-dom";

import { user } from "./stores/auth/auth-store";
import { ROUTE_NAMES } from "./routes/router";
import { useEffect } from "react";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!user.isLoggedIn) {
			navigate(ROUTE_NAMES.login);
		}
	}, [user.isLoggedIn]);

	return (
		<>
			<p>Hello, world!</p>
			<Outlet></Outlet>
		</>
	);
}

export default App;
