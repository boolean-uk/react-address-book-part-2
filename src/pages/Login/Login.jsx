import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import AuthCtx from "../../stores/auth/auth-store";
import Input from "../../components/Form/Input";
import { Button, Container, Form } from "react-bootstrap";
import styles from "./login.module.css";
export default function Login() {
	const navigate = useNavigate();
	const { isLoggedIn, login } = useContext(AuthCtx);

	useEffect(() => {
		if (isLoggedIn) {
			navigate(ROUTE_NAMES.dashboard);
		}
	}, [isLoggedIn]);

	const loginHandler = () => {
		login();
		//display toast
	};

	return (
		<Container className={styles.wrapper}>
			<h1 className="mb-4">Address Book</h1>
			<Form>
				<Input
					id={"name"}
					label={"Username"}></Input>
				<Input
					id={"password"}
					label={"Password"}
					type={"password"}></Input>
			</Form>
			<Button
				className="mt-2"
				size="lg"
				onClick={loginHandler}>
				Log in
			</Button>
		</Container>
	);
}
