import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Input from "../../components/Form/Input";
import styles from "./list-filters.module.css";

export default function ListFilters({ list, onUpdate }) {
	const [filteredList, setFilteredList] = useState(list);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [job, setJob] = useState("");

	const handleFiltering = () => {
		const createFilter = (search) =>
			search ? (str) => new RegExp(search, "i").test(str) : () => true;
		console.log(createFilter());
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
		<Stack
			className={
				"justify-content-center p-4 bg-secondary rounded-3 " +
				styles.wrapper
			}
			direction="horizontal"
			gap={2}>
			<Input
				id={"name"}
				label="Name"
				onChange={(e) => {
					setName(e.target.value);
				}}
				value={name}></Input>{" "}
			<Input
				id={"email"}
				label="Email"
				type={"email"}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				value={email}></Input>
			<Input
				id={"city"}
				label="City"
				onChange={(e) => {
					setCity(e.target.value);
				}}
				value={city}></Input>
			<Input
				id={"job"}
				label="Job"
				onChange={(e) => {
					setJob(e.target.value);
				}}
				value={job}></Input>
		</Stack>
	);
}
