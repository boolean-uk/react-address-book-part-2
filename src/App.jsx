import { Outlet, useNavigate } from "react-router-dom";

import { ROUTE_NAMES } from "./routes/router";
import { useContext, useEffect } from "react";
import AuthCtx from "./stores/auth/auth-store";

function App() {
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(AuthCtx);

	useEffect(() => {
		if (!isLoggedIn) {
			navigate(ROUTE_NAMES.login);
		}
	}, [isLoggedIn]);

	return (
		<>
			<p>Hello, world!</p>
			<Outlet></Outlet>
		</>
	);
}

export default App;
