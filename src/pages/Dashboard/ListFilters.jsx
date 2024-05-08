import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import Input from "../../components/Form/Input";
import styles from "./list-filters.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";

export default function ListFilters({ list, onUpdate }) {
	const navigate = useNavigate();
	const [filteredList, setFilteredList] = useState(list);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [job, setJob] = useState("");

	const handleFiltering = () => {
		const createFilter = (search) =>
			search ? (str) => new RegExp(search, "i").test(str) : () => true;
		//
		const filterName = createFilter(name),
			filterEmail = createFilter(email),
			filterCity = createFilter(city),
			filterJob = createFilter(job);

		setFilteredList(
			list.filter(
				(e) =>
					filterName(`${e.firstName} ${e.firstName}`) &&
					filterEmail(e.email) &&
					filterCity(e.city) &&
					filterJob(e.jobTitle)
			)
		);
	};

	useEffect(() => onUpdate(filteredList), [filteredList]);
	useEffect(() => {
		handleFiltering();
	}, [name, email, city, job]);

	return (
		<Container>
			<Row
				className={
					"justify-content-center align-content-center p-4 bg-secondary rounded-3 gap-3"
				}>
				<Col md="auto">
					<Input
						id={"name"}
						label="Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}></Input>
				</Col>
				<Col md="auto">
					<Input
						id={"email"}
						label="Email"
						type={"email"}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}></Input>
				</Col>
				<Col md="auto">
					<Input
						id={"city"}
						label="City"
						onChange={(e) => {
							setCity(e.target.value);
						}}
						value={city}></Input>
				</Col>
				<Col md="auto">
					<Input
						id={"job"}
						label="Job"
						onChange={(e) => {
							setJob(e.target.value);
						}}
						value={job}></Input>
				</Col>
				<Col
					md="auto"
					className="d-flex align-content-center justify-content-end">
					<Button
						className=""
						variant="light"
						onClick={() => navigate(ROUTE_NAMES.newEntry)}>
						New Entry
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
