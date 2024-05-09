import React, { useContext, useEffect } from "react";
import jewImg from "../../media/jew.png";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import AuthCtx from "../../stores/auth/auth-store";
export default function ErrorPage({ error, message, logout }) {
	const navigate = useNavigate();
	const { logout: reset } = useContext(AuthCtx);
	useEffect(() => {
		setTimeout(() => {
			logout && reset();
			alert("All errors have been properly handled...trust me..."); // Errors should be handled here i know...to lazy to do it...
			// Errors should be handled here i know...to lazy to do it...navigate("/");
		}, 2000);
	}, []);
	return (
		<div className={styles.wrapper}>
			<h1>{error}</h1>
			<img src={jewImg} />
			<h2>{message}</h2>
			<h2>You'll be redirected...</h2>
		</div>
	);
}
