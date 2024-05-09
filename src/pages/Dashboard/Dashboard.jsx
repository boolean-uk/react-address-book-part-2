import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Accordion, Container, Stack } from "react-bootstrap";
import UserNav from "./UserNav";
import { Outlet, useLoaderData } from "react-router-dom";
import AccordionList from "../../components/AccordionList/AccordionList";
import ListFilters from "./ListFilters";
import { getAllEntries } from "../../apis/serverActions";

export const dashboardRouteLoader = getAllEntries;
//
export default function Dashboard() {
	const loaderData = useLoaderData();

	const [filteredList, setFilteredList] = useState([]);
	const [serverData, setServerData] = useState(undefined);

	useEffect(() => {
		// console.log("im here again fetching on dashboard");
		// setServerData(loaderData); //this doesnt work...
		// setFilteredList(loaderData);

		dashboardRouteLoader()
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setServerData(data);
				setFilteredList(data);
			});
	}, [loaderData]);

	if (!serverData)
		return (
			<Container fluid>
				<h1>loading</h1>
			</Container>
		);

	return (
		<Container fluid>
			<Outlet></Outlet>
			<Stack>
				<UserNav />
				<ListFilters
					list={serverData}
					onUpdate={setFilteredList}
				/>
				<AccordionList
					id="dashboard-list"
					list={filteredList}
				/>
			</Stack>
		</Container>
	);
}
