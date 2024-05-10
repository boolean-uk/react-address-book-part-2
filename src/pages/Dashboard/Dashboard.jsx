import React, { useEffect, useState } from "react";
import { Card, Col, Container, Placeholder, Row, Stack } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import AccordionList from "../../components/AccordionList/AccordionList";
import { getAllEntries } from "../../apis/serverActions";
import ListFilters from "./ListFilters";
import UserNav from "./UserNav";
import placeholder from "../../media/user-image-placeholder.png";
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
				setServerData(data);
				setFilteredList(data);
			});
	}, [loaderData]);

	if (!serverData) return <DashboardPlaceholder />;

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

const DashboardPlaceholder = () => (
	<Stack>
		<Container>
			<Container
				gap={2}
				className="bg-primary mb-5 px-4 py-3 rounded-3 justify-content-center align-content-center">
				<Row className="justify-content-center align-align-content-center">
					<Col
						className={
							"d-flex justify-content-center align-content-center "
						}></Col>
					<Col className=" align-content-center  text-center">
						<h1 className="text-white">
							<Placeholder animation="glow">
								<Placeholder xs={12} />
							</Placeholder>
						</h1>
					</Col>
					<Col className="">
						<Stack
							direction="horizontal"
							gap={4}
							className="justify-content-end align-content-center h-100 me-4">
							<Placeholder.Button variant="outline-light">
								Logout
							</Placeholder.Button>
						</Stack>
					</Col>
				</Row>
			</Container>
		</Container>
		{/*  */}
		<Container
			gap={2}
			className="bg-secondary mb-5 px-4 py-3 rounded-3 justify-content-center align-content-center">
			<Row className="justify-content-center align-align-content-center">
				<Col
					className={
						"d-flex justify-content-center align-content-center "
					}></Col>
				<Col className=" align-content-center  text-center">
					<h1 className="text-white">
						<Placeholder animation="glow">
							<Placeholder xs={12} />
						</Placeholder>
					</h1>
				</Col>
				<Col className="">
					<Stack
						direction="horizontal"
						gap={4}
						className="justify-content-end align-content-center h-100 me-4"></Stack>
				</Col>
			</Row>
		</Container>
		{/*  */}
		<Container
			gap={2}
			className="bg-secondary px-4 py-3 rounded-3 justify-content-center align-content-center h-100">
			{Array(10)
				.fill("")
				.map((e) => (
					<Row className="justify-content-center align-align-content-center">
						<Col className=" align-content-center  text-center">
							<h1 className="text-white  ">
								<Placeholder animation="glow">
									<Placeholder xs={12} />
								</Placeholder>
							</h1>
						</Col>
					</Row>
				))}
		</Container>
	</Stack>
);
