import React from "react";
import { Accordion, Col, Container, Image, Row, Stack } from "react-bootstrap";
import IconButton, { ICONS } from "../Buttons/IconButton";

export default function AccordionItem({
	eventKey,
	data,
	onEditHandler,
	onDeleteHandler,
}) {
	return (
		<Accordion.Item eventKey={eventKey}>
			<Header {...data} />
			<Body
				data={data}
				onEditHandler={onEditHandler}
				onDeleteHandler={onDeleteHandler}
			/>
		</Accordion.Item>
	);
}
const Header = ({ image, firstName, lastName }) => (
	<Accordion.Header>
		<Stack
			direction="horizontal"
			gap={3}>
			<Image src={image} />
			<span>{firstName}</span>
			<span>{lastName}</span>
		</Stack>
	</Accordion.Header>
);
const Body = ({ data, onEditHandler, onDeleteHandler }) => (
	<Accordion.Body>
		<Container fluid>
			<Row>
				<Col className="align-content-center my-2">
					<Row className="">
						<Col
							md={"auto"}
							className="w-50">
							Gender: {data?.gender}
						</Col>
						<Col md={"auto"}>Job: {data?.job}</Col>
					</Row>
					<Row className="">
						<Col
							md={"auto"}
							className="w-50">
							Email: {data?.email}
						</Col>
						<Col md={"auto"}>City: {data?.city}</Col>
					</Row>
					<Row className="">
						<Col className="">Street: {data?.street}</Col>
					</Row>
				</Col>
				<Col md="auto">
					<h3 style={{ height: 350, background: "#f005" }}>
						Display Map here
					</h3>
				</Col>
				<Col
					md="auto"
					className="align-content-between">
					<Stack
						className="h-100 justify-content-between"
						gap={2}>
						<IconButton
							icon={ICONS.edit}
							onClick={() => onEditHandler(data?.id)}
						/>
						<IconButton
							variant="danger"
							icon={ICONS.trash}
							onClick={() => onDeleteHandler(data?.id)}
						/>
					</Stack>
				</Col>
			</Row>
		</Container>
	</Accordion.Body>
);
