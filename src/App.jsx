import { Outlet, useNavigate } from "react-router-dom";

import { ROUTE_NAMES } from "./routes/router";
import { useContext, useEffect } from "react";
import AuthCtx from "./stores/auth/auth-store";
import AccordionList from "./components/AccordionList/AccordionList";
import Input from "./components/Form/Input";
import FileInput from "./components/Form/FileInput";
import { Overlay } from "react-bootstrap";
import Toast from "./components/Toast/Toast";
import { ToastContainer } from "react-toastify";

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
			<h1>App root</h1>
			<Toast />
			<Outlet></Outlet>
		</>
	);
}

export default App;
