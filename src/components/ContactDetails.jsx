import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ContactDetails() {
	const { id } = useParams();
	const [contact, setContact] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${id}`)
			.then((response) => response.json())
			.then((data) => setContact(data));
	}, [id]);

	function handleDelete() {
		fetch("https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact", {
			method: "DELETE",
		}).then((response) => {
			if (response.ok) {
				navigate("/contacts");
			}
		});
	}

	function handleUpdate(e) {
		e.preventDefault();

		fetch(
			`https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contact),
			}
		).then(() => {
			setIsEditing(false);
			navigate(`/contacts/${id}`);
		});
	}
	function handleChange(e) {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	}
	if (!contact) {
		return <p>Loading...</p>;
	}

	return (
		<div className="contactView">
			{!isEditing ? (
				<>
					<h1>
						{contact.firstName} {contact.lastName}
					</h1>
					<p>Street: {contact.street}</p>
					<p>City: {contact.city}</p>
					<button onClick={() => setIsEditing(true)}>
						Update Contact
					</button>
					<button onClick={handleDelete}>Delete Contact</button>
				</>
			) : (
				<div className="form-container">
					<div className="form-card">
						<form onSubmit={handleUpdate}>
							<label>
								First Name:
								<input
									type="text"
									name="firstName"
									value={contact.firstName}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Last Name:
								<input
									type="text"
									name="lastName"
									value={contact.lastName}
									onChange={handleChange}
									required
								/>
							</label>
							<br />
							<label>
								Gender:
								<input
									type="text"
									name="gender"
									value={contact.gender}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Email:
								<input
									type="text"
									name="email"
									value={contact.email}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Job Title:
								<input
									type="text"
									name="jobTitle"
									value={contact.jobTitle}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Street:
								<input
									type="text"
									name="street"
									value={contact.street}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								City:
								<input
									type="text"
									name="city"
									value={contact.city}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								City:
								<input
									type="text"
									name="city"
									value={contact.city}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Latitude:
								<input
									type="text"
									name="latitude"
									value={contact.latitude}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Longitude:
								<input
									type="text"
									name="longitude"
									value={contact.longitude}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Favourite Colour:
								<input
									type="text"
									name="favouriteColour"
									value={contact.favouriteColour}
									onChange={handleChange}
									required
								/>
							</label>
							<br />

							<label>
								Profile Image:
								<input
									type="text"
									name="profileImage"
									value={contact.profileImage}
									onChange={handleChange}
									required
								/>
							</label>
							<br />
							<button type="submit">Save</button>
							<button
								type="button"
								onClick={() => setIsEditing(false)}
							>
								Cancel
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}

export default ContactDetails;
