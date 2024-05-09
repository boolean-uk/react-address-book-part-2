import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import AccordionList from "../../components/AccordionList/AccordionList";
import { getAllEntries } from "../../apis/serverActions";
import ListFilters from "./ListFilters";
import UserNav from "./UserNav";

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
		<Container>
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
