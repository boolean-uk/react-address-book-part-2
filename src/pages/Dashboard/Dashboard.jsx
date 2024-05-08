import React from "react";
import { Accordion, Container, Stack } from "react-bootstrap";
import UserNav from "./UserNav";
import { Outlet, useLoaderData } from "react-router-dom";
import AccordionList from "../../components/AccordionList/AccordionList";

export const dashboardRouteLoader = () =>
	fetch("https://boolean-api-server.fly.dev/rafa-lopes-pt/contact");
export default function Dashboard() {
	const loaderData = useLoaderData();
	console.log(loaderData);
	return (
		<Container fluid>
			<Outlet></Outlet>
			<Stack>
				<UserNav />
				<AccordionList list={loaderData || []} />
			</Stack>
		</Container>
	);
}
