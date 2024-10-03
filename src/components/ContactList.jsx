import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactList() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetchContacts();
	}, []);

	function fetchContacts() {
		fetch("https://boolean-uk-api-server.fly.dev/KajaPlaszko/contact/")
			.then((response) => response.json())
			.then((data) => setContacts(data));
	}

	return (
		<div>
			<h1>Contacts</h1>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<Link to={`/contacts/${contact.id}`}>
							{contact.firstName} {contact.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ContactList;
