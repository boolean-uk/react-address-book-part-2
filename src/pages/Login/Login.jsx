import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import AuthCtx from "../../stores/auth/auth-store";

export default function Login() {
	const navigate = useNavigate();
	const { isLoggedIn, login } = useContext(AuthCtx);

	useEffect(() => {
		if (isLoggedIn) {
			navigate(ROUTE_NAMES.dashboard);
		}
	}, [isLoggedIn]);

	return (
		<div>
			Login
			<button onClick={login}>Log in</button>
		</div>
	);
}
