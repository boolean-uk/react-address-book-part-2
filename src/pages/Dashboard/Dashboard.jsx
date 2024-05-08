import React, { useState } from "react";
import { Accordion, Container, Stack } from "react-bootstrap";
import UserNav from "./UserNav";
import { Outlet, useLoaderData } from "react-router-dom";
import AccordionList from "../../components/AccordionList/AccordionList";
import ListFilters from "./ListFilters";
import { getAllEntries } from "../../stores/serverActions";

export const dashboardRouteLoader = getAllEntries;
//
export default function Dashboard() {
	const loaderData = useLoaderData();

	const [filteredList, setFilteredList] = useState(loaderData);
	return (
		<Container fluid>
			<Outlet></Outlet>
			<Stack>
				<UserNav />
				<ListFilters
					list={loaderData}
					onUpdate={setFilteredList}
				/>
				<AccordionList list={filteredList} />
			</Stack>
		</Container>
	);
}
