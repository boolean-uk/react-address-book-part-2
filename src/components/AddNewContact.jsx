import { useState } from "react"
import { Link } from "react-router-dom"

export default function AddNewContact() {
	const [newContact, setNewContact] = useState({
		firstName: "",
		lastName: "",
		city: "",
		street: "",
		email: "",
		profileImage:
			"https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon",
	})

	function handleChange(e) {
		const { name, value } = e.target
		setNewContact({ ...newContact, [name]: value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		fetch("https://boolean-api-server.fly.dev/PerikK/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newContact),
		})
			.then((response) => response.json())
			.then(
				setNewContact({
					firstName: "",
					lastName: "",
					city: "",
					street: "",
					email: "",
					profileImage:
						"https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon",
				})
			)
	}

	return (
		<>
			<h2>Add a contact</h2>

			<form onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='textbox'
					name='firstName'
					value={newContact.firstName}
					onChange={handleChange}
				/>
				<label htmlFor='lastName'>Last Name</label>
				<input
					type='textbox'
					name='lastName'
					value={newContact.lastName}
					onChange={handleChange}
				/>
				<label htmlFor='city'>City</label>
				<input
					type='textbox'
					name='city'
					value={newContact.city}
					onChange={handleChange}
				/>
				<label htmlFor='street'>Street</label>
				<input
					type='textbox'
					name='street'
					value={newContact.street}
					onChange={handleChange}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='textbox'
					name='email'
					value={newContact.email}
					onChange={handleChange}
				/>
				<button type='submit'>Add Contact</button>
			</form>
		</>
	)
}
