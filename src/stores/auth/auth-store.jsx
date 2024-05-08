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

	async function login(username, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (username === "borat" && password === "greatsuccess") {
					setIsLoggedIn(true);
					setUser({
						name: "Borat Sagdiyev",
						image: "https://imgs.search.brave.com/PlUp-eWqPODMpLmHZWHaur07iohjCLpwGDcXS9-VaOU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzdlL0Jv/cmF0X2luX0NvbG9n/bmUuanBnLzUxMnB4/LUJvcmF0X2luX0Nv/bG9nbmUuanBn",
					});
					resolve();
				} else reject();
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
