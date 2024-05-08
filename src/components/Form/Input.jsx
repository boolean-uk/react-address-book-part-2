import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function Input({ id, label, type, value, onChange, ...props }) {
	return (
		<FloatingLabel
			controlId={id}
			label={label}
			name={id}
			className="">
			<Form.Control
				{...props}
				type={type}
				placeholder=""
				value={value}
				onChange={onChange}
			/>
		</FloatingLabel>
	);
}
