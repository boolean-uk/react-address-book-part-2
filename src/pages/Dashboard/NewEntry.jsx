import React from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Modal,
	Row,
	Stack,
} from "react-bootstrap";
import Input from "../../components/Form/Input";
import { useNavigate, useSubmit } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/router";
import FileInput from "../../components/Form/FileInput";
import useForm from "../../components/Form/useForm";
import { addNewEntry } from "../../stores/serverActions";
import { toast } from "react-toastify";

export default function NewEntry() {
	const navigate = useNavigate();
	const submit = useSubmit();

	const handleClose = () => {
		navigate(ROUTE_NAMES.dashboard);
	};
	const { mutateEntry, entries, get } = useForm([
		"profileImage",
		"firstName",
		"lastName",
		"gender",
		"jobTitle",
		"email",
		"city",
		"street",
		"favouriteColour",
	]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const data = {
			...entries(),
			...navigator.geolocation.getCurrentPosition((position) => ({
				longitude: position.coords.latitude,
				latitude: position.coords.latitude,
			})),
		};
		console.log("submited", JSON.stringify(data));

		// "firstName": "Rick",
		// "lastName": "Sanchez",
		// "street": "Morty Lane",
		// "city": "Jerryville",
		// "gender": "Male",
		// "email": "rick@sanchez.com",
		// "jobTitle": "Scientist",
		// "latitude": 42,
		// "longitude": 629,
		// "favouriteColour": "#0d7f26",
		// "profileImage": "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"

		// addNewEntry(data)
		// 	.then((res) => res.json())
		// 	.then((e) => console.log(e));

		toast.promise(addNewEntry(data), {
			pending: "Sending...",
			error: "Something went wrong.",
			success: "Created new entry!",
		});
		submit(null, { method: "POST", action: "/" });
	};

	return (
		<Modal
			show={true}
			onHide={handleClose}>
			<Modal.Header
				closeButton
				className="">
				<Modal.Title>Create New Entry</Modal.Title>
			</Modal.Header>
			<Modal.Body className="">
				<Form
					id="new-entry-form"
					onSubmit={handleFormSubmit}>
					<Stack gap={3}>
						<Row className="gap-2">
							<Col className="d-flex justify-content-center">
								<FileInput
									onChange={(file) =>
										mutateEntry("profileImage", file, true)
									}
								/>
							</Col>
						</Row>
						<Row className="gap-2">
							<Col>
								<Input
									label={"First Name"}
									value={get("firstName").value}
									onChange={(e) =>
										mutateEntry("firstName", e.target.value)
									}
									required
								/>
							</Col>
							<Col>
								<Input
									label={"Last Name"}
									value={get("lastName").value}
									onChange={(e) =>
										mutateEntry("lastName", e.target.value)
									}
								/>
							</Col>
						</Row>
						<Row className="gap-2">
							<Col>
								<Input
									label={"Gender"}
									value={get("gender").value}
									onChange={(e) =>
										mutateEntry("gender", e.target.value)
									}
								/>
							</Col>
							<Col>
								<Input
									label={"Job"}
									value={get("jobTitle").value}
									onChange={(e) =>
										mutateEntry("jobTitle", e.target.value)
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Input
									label={"Email"}
									value={get("email").value}
									onChange={(e) =>
										mutateEntry("email", e.target.value)
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Input
									label={"City"}
									value={get("city").value}
									onChange={(e) =>
										mutateEntry("city", e.target.value)
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Input
									label={"Street"}
									value={get("street").value}
									onChange={(e) =>
										mutateEntry("street", e.target.value)
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Input
									label={"Favorite Color"}
									value={get("favouriteColour").value}
									onChange={(e) =>
										mutateEntry(
											"favouriteColour",
											e.target.value
										)
									}
									className="w-100"
									type={"color"}
								/>
							</Col>
						</Row>
					</Stack>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					type="button"
					variant="secondary"
					onClick={handleClose}>
					Close
				</Button>
				<Button
					form="new-entry-form"
					type="submit"
					variant="primary">
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
