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
import Input from "../../../components/Form/Input";
import { useNavigate, useSubmit } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/router";
import FileInput from "../../../components/Form/FileInput";
import useForm from "../../../components/Form/useForm";
import { addNewEntry } from "../../../stores/serverActions";
import { toast } from "react-toastify";
import IconButton, { ICONS } from "../../../components/Buttons/IconButton";

export default function ModalWrapper({
	data = [
		"profileImage",
		"firstName",
		"lastName",
		"gender",
		"jobTitle",
		"email",
		"city",
		"street",
		"favouriteColour",
		"longitude",
		"latitude",
	],
	title,
	onSubmitButtonText = "Ok",
	toastResponses = {
		pending: "Sending...",
		error: "Something went wrong.",
		success: "Great Success!",
	},
	onSubmitServerAction = () => {},
}) {
	const navigate = useNavigate();
	const submit = useSubmit();

	const handleClose = () => {
		navigate(ROUTE_NAMES.dashboard);
	};
	const { mutateEntry, entries, get } = useForm(data);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const data = {
			...entries(),
		};

		console.log("Submiting data", data);

		toast.promise(onSubmitServerAction(data), toastResponses);
		submit(null, { method: "POST", action: ROUTE_NAMES.dashboard });
	};

	function handleGeoLocalization() {
		if (
			!get("city").value ||
			!get("city").isValid ||
			!get("street").value ||
			!get("street").isValid
		) {
			toast("Can´t auto detect without proper fields", { type: "error" });
		}

		

	}

	return (
		<Modal
			show={true}
			onHide={handleClose}>
			<Modal.Header
				closeButton
				className="">
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="">
				<Form
					id="new-entry-form"
					onSubmit={handleFormSubmit}>
					<Stack gap={3}>
						<Row className="gap-2">
							<Col className="d-flex justify-content-center">
								<FileInput
									initialValue={get("profileImage").value}
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
						</Row>{" "}
						<Row>
							<Col>
								<Input
									label={"Latitude"}
									value={get("latitude").value}
									onChange={(e) =>
										mutateEntry("latitude", e.target.value)
									}
								/>
							</Col>
							<Col>
								<Input
									label={"Longitude"}
									value={get("longitude").value}
									onChange={(e) =>
										mutateEntry("longitude", e.target.value)
									}
								/>
							</Col>
							<Col className="align-content-center">
								<IconButton
									onClick={handleGeoLocalization}
									icon={ICONS.geolocation}></IconButton>
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
					Cancel
				</Button>
				<Button
					form="new-entry-form"
					type="submit"
					variant="primary">
					{onSubmitButtonText}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
