import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import AuthCtx from "../../stores/auth/auth-store";
import Input from "../../components/Form/Input";
import { Button, Container, Form } from "react-bootstrap";
import styles from "./login.module.css";
import { toast } from "react-toastify";
import useForm from "../../components/Form/useForm";
import {
	validateName,
	validatePassword,
} from "../../components/Form/form-validators";
export default function Login() {
	//========= Page Redirection
	const { isLoggedIn, login } = useContext(AuthCtx);
	const navigate = useNavigate();
	useEffect(() => {
		if (isLoggedIn) {
			navigate(ROUTE_NAMES.dashboard);
		}
	}, [isLoggedIn]);

	//========= Form Handling
	const { entries, get, mutateEntry, isInvalid } = useForm([
		"username",
		"password",
	]);

	const loginHandler = (e) => {
		e.preventDefault();
		const { username, password } = entries();
		toast.promise(login(username, password), {
			error: "Invalid User",
			pending: "Loading...",
			success: "Welcome back!",
		});
	};

	return (
		<Container className={styles.wrapper}>
			<h1 className="mb-4">Address Book</h1>
			<Form
				onSubmit={loginHandler}
				noValidate>
				<Input
					id={"name"}
					label={"Username"}
					required
					isInvalid={isInvalid("username")}
					invalidText={"Username contains only letters"}
					value={get("username").value}
					onChange={(e) =>
						mutateEntry("username", e.target.value, validateName)
					}></Input>
				<Input
					id={"password"}
					label={"Password"}
					type={"password"}
					required
					isInvalid={isInvalid("password")}
					invalidText={"Password is too short"}
					value={get("password").value}
					onChange={(e) =>
						mutateEntry(
							"password",
							e.target.value,
							validatePassword
						)
					}></Input>

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
