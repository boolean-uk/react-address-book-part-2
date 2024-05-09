import React from "react";
import {
	Button,
	Col,
	Form,
	Modal,
	Row,
	Stack
} from "react-bootstrap";
import { useNavigate, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import { getCoordinatesFromAddress } from "../../../apis/geolocation";
import IconButton, { ICONS } from "../../../components/Buttons/IconButton";
import FileInput from "../../../components/Form/FileInput";
import Input from "../../../components/Form/Input";
import {
	validateEmail,
	validateLatitude,
	validateLongitude,
	validateName,
} from "../../../components/Form/form-validators";
import useForm from "../../../components/Form/useForm";
import { ROUTE_NAMES } from "../../../routes/router";

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

	const handleClose = () => {
		navigate(ROUTE_NAMES.dashboard);
	};

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
				<FormModal
					data={data}
					toastResponses={toastResponses}
					onSubmitServerAction={onSubmitServerAction}></FormModal>
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

const FormModal = ({ data, toastResponses, onSubmitServerAction }) => {
	const submit = useSubmit();
	const { mutateEntry, entries, get, isInvalid, canSubmit, touchAll } =
		useForm(data);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		//Need to check if theyre invalid before submiting -> Dunny why server always returns 201 if long and lat r defined
		touchAll();
		if (!canSubmit("profileImage", "favouriteColour")) {
			toast("Please fill out the form", { type: "error" });
			return;
		}

		const data = {
			...entries(),
			latitude: +get("latitude").value || undefined,
			longitude: +get("longitude").value || undefined,
		};

		console.log("submited data", data);
		onSubmitServerAction(data).then((res) => {
			console.log(res);
			if (!/^2\d\d/.test(res.status)) {
				toast(toastResponses.error, { type: "error" });
				return;
			}
			toast(toastResponses.success, { type: "success" });

			submit(null, { method: "POST", action: ROUTE_NAMES.dashboard });
		});
	};

	async function handleGeoLocalization() {
		const city = get("city"),
			street = get("street");
		console.log(city, street);
		if (!city.value || !city.isValid || !street.value || !street.isValid) {
			toast("Can´t auto detect without address fields", {
				type: "error",
			});
			return;
		}
		toast
			.promise(getCoordinatesFromAddress(city.value, street.value), {
				error: "Error while detecting Geolocation",
			})
			.then(({ longitude, latitude }) => {
				mutateEntry("longitude", longitude, true);
				mutateEntry("latitude", latitude, true);
			});
	}
	return (
		<Form
			noValidate
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
								mutateEntry(
									"firstName",
									e.target.value,
									validateName
								)
							}
							isInvalid={isInvalid("firstName")}
							required
						/>
					</Col>
					<Col>
						<Input
							label={"Last Name"}
							value={get("lastName").value}
							onChange={(e) =>
								mutateEntry(
									"lastName",
									e.target.value,
									validateName
								)
							}
							isInvalid={isInvalid("lastName")}
							required
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
							isInvalid={isInvalid("gender")}
							required
						/>
					</Col>
					<Col>
						<Input
							label={"Job"}
							value={get("jobTitle").value}
							onChange={(e) =>
								mutateEntry("jobTitle", e.target.value)
							}
							isInvalid={isInvalid("jobTitle")}
							required
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Input
							label={"Email"}
							value={get("email").value}
							onChange={(e) =>
								mutateEntry(
									"email",
									e.target.value,
									validateEmail
								)
							}
							isInvalid={isInvalid("email")}
							required
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Input
							label={"City"}
							value={get("city").value}
							onChange={(e) =>
								mutateEntry(
									"city",
									e.target.value,
									validateName
								)
							}
							isInvalid={isInvalid("city")}
							required
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
							isInvalid={isInvalid("street")}
							required
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Input
							label={"Latitude"}
							value={get("latitude").value}
							onChange={(e) =>
								mutateEntry(
									"latitude",
									e.target.value,
									validateLatitude
								)
							}
							isInvalid={isInvalid("latitude")}
							required
						/>
					</Col>
					<Col>
						<Input
							label={"Longitude"}
							value={get("longitude").value}
							onChange={(e) =>
								mutateEntry(
									"longitude",
									e.target.value,
									validateLongitude
								)
							}
							isInvalid={isInvalid("longitude")}
							required
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
								mutateEntry("favouriteColour", e.target.value)
							}
							className="w-100"
							type={"color"}
							isInvalid={isInvalid("favouriteColour")}
							invalidText={"Please select a colour"}
						/>
					</Col>
				</Row>
			</Stack>
		</Form>
	);
};
