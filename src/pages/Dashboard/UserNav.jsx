import React, { useContext } from "react";
import AuthCtx from "../../stores/auth/auth-store";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import styles from "./user-nav.module.css";
export default function UserNav() {
	const { logout, user } = useContext(AuthCtx);
	return (
		<Container
			gap={2}
			className="bg-primary mb-5 px-4 py-3 rounded-3 justify-content-center align-content-center">
			<Row className="justify-content-center align-align-content-center">
				<Col
					className={
						"d-flex justify-content-center align-content-center "
					}>
					<Image
						src={user.image}
						className={styles.image}></Image>
				</Col>
				<Col className=" align-content-center  text-center">
					<h1 className="text-white">{`${user.name}'s Address Book`}</h1>
				</Col>
				<Col className="">
					<Stack
						direction="horizontal"
						gap={4}
						className="justify-content-end align-content-center h-100 me-4">
						<Button
							variant="outline-light"
							onClick={logout}>
							Logout
						</Button>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
}
