import React, { useEffect } from "react";
import jewImg from "../../media/jew.png";
import styles from "./404.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
export default function NotFoundPage() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => navigate("/"), 2000);
	}, []);

	return (
		<div className={styles.wrapper}>
			<h1>404 -page not found</h1>
			<img src={jewImg} />
			<h2>Oh no...this terrible jew stole the page you're looking for</h2>
			<h2>You'll be redirected...</h2>
		</div>
	);
}
