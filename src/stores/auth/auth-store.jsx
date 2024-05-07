import React, { useState } from "react";
const AuthCtx = React.createContext({
	user: { name: "", image: "" },
	isLoggedIn: false,
	login: async () => {},
	logout: async () => {},
});

export const AuthCtxProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({ name: "", image: "" });

	async function login() {
		return new Promise((resolve) => {
			setTimeout(() => {
				setIsLoggedIn(true);
				setUser({ name: "Rj", image: "" });
				resolve();
			}, 1000);
		});
	}
	async function logout() {
		setIsLoggedIn(false);
		setUser({ name: "", image: "" });
	}

	return (
		<AuthCtx.Provider value={{ user, isLoggedIn, login, logout }}>
			{props.children}
		</AuthCtx.Provider>
	);
};

export default AuthCtx;
