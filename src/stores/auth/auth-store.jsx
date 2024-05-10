import React, { useState } from "react";
const AuthCtx = React.createContext({
	user: { name: "", image: "" },
	isLoggedIn: false,
	login: async () => {},
	logout: async () => {},
	checkLogin: () => {},
});

export const AuthCtxProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({ name: "", image: "" });

	async function login(username, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (username === "borat" && password === "greatsuccess") {
					saveLogin();
					resolve();
				} else reject();
			}, 1000);
		});
	}
	async function logout() {
		clearLogin();
	}

	const saveLogin = () => {
		setIsLoggedIn(true);
		setUser({
			name: "Borat Sagdiyev",
			image: "https://imgs.search.brave.com/PlUp-eWqPODMpLmHZWHaur07iohjCLpwGDcXS9-VaOU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzdlL0Jv/cmF0X2luX0NvbG9n/bmUuanBnLzUxMnB4/LUJvcmF0X2luX0Nv/bG9nbmUuanBn",
		});
		sessionStorage.setItem("isLoggedIn", true);
	};
	const clearLogin = () => {
		sessionStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
		setUser({ name: "", image: "" });
	};
	const checkLogin = () => {
		const hasSessionData = sessionStorage.getItem("isLoggedIn") !== null;

		if (hasSessionData) login("borat", "greatsuccess");
		return hasSessionData;
	};

	return (
		<AuthCtx.Provider
			value={{ user, isLoggedIn, login, logout, checkLogin }}>
			{props.children}
		</AuthCtx.Provider>
	);
};

export default AuthCtx;
