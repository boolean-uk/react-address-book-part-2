import React, { useContext } from "react";
import AuthCtx from "../../stores/auth/auth-store";
import { Button, Container, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import styles from "./user-nav.module.css";
export default function UserNav() {
	const { logout, user } = useContext(AuthCtx);
	const navigate = useNavigate();
	return (
		<Stack
			direction="horizontal"
			gap={2}
			className="px-4">
			<Image
				src={user.image}
				className={styles.image}></Image>
			<h1>{`${user.name}'s Address Book`}</h1>
			<Stack
				direction="horizontal"
				gap={4}
				className="ms-auto">
				<Button onClick={() => navigate(ROUTE_NAMES.newEntry)}>
					New Entry
				</Button>
				<Button
					variant="outline-primary"
					onClick={logout}>
					Logout
				</Button>
			</Stack>
		</Stack>
	);
}
