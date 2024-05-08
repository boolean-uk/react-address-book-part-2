import React from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";

export default function Input({
	id,
	label,
	type,
	value,
	onChange,
	invalidText,
	isInvalid,
	...props
}) {
	return (
		<InputGroup hasValidation={isInvalid}>
			<FloatingLabel
				controlId={id}
				label={label}
				name={id}
				className="">
				<Form.Control
					{...props}
					isInvalid={isInvalid}
					type={type}
					placeholder=""
					value={value}
					onChange={onChange}
				/>
				{isInvalid && (
					<Form.Control.Feedback type="invalid">
						{invalidText || "Input is invalid"}
					</Form.Control.Feedback>
				)}
			</FloatingLabel>
		</InputGroup>
	);
}
