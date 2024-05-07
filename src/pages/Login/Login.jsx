import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import AuthCtx from "../../stores/auth/auth-store";
import Input from "../../components/Form/Input";
import { Button, Container, Form } from "react-bootstrap";
import styles from "./login.module.css";
import { toast } from "react-toastify";
export default function Login() {
	const navigate = useNavigate();
	const { isLoggedIn, login } = useContext(AuthCtx);

	useEffect(() => {
		if (isLoggedIn) {
			navigate(ROUTE_NAMES.dashboard);
		}
	}, [isLoggedIn]);

	const loginHandler = (e) => {
		e.preventDefault();
		//Not sure why...but this doesnt work with react-bootstrap
		// const data = new FormData(e.target);

		const name = document.querySelector("#name").value;
		const pass = document.querySelector("#password").value;

		toast.promise(login(name, pass), {
			error: "Invalid User",
			pending: "Loading...",
			success: "Welcome back!",
		});
	};

	return (
		<Container className={styles.wrapper}>
			<h1 className="mb-4">Address Book</h1>
			<Form onSubmit={loginHandler}>
				<Input
					id={"name"}
					label={"Username"}></Input>
				<Input
					id={"password"}
					label={"Password"}
					type={"password"}></Input>

				<Button
					type="submit"
					className="mt-2"
					size="lg">
					Log in
				</Button>
			</Form>
		</Container>
	);
}
