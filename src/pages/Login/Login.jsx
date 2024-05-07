import React, { useEffect } from "react";
import { login, user } from "../../stores/auth/auth-store";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";

export default function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		if (user.isLoggedIn) {
			navigate(ROUTE_NAMES.dashboard);
		}
	}, []);

	return (
		<div>
			Login
			<button>Log in</button>
		</div>
	);
}
