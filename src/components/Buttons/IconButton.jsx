import React from "react";
import { Button } from "react-bootstrap";

export const ICONS = {
	edit: "fa-regular fa-pen-to-square",
	trash: "fa-solid fa-trash",
	geolocation: "fa-solid fa-location-crosshairs",
};

export default function IconButton({ icon, ...props }) {
	return (
		<Button {...props}>
			<i className={icon}></i>
		</Button>
	);
}
