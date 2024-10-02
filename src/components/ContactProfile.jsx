import { useState, useEffect, useContext } from 'react';
import NavigationMenu from './NavigationMenu';
import { ContactsContext, FormContext } from '../context';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ContactProfile.css';

function ContactProfile() {
	const [person, setPerson] = useState(null);
	const { id } = useParams();
	const { contactsData, setContactsData } = useContext(ContactsContext);
	const { setFormData } = useContext(FormContext);
	const navigate = useNavigate();

	const handleDelete = () => {
		fetch(`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					setContactsData((prevContacts) =>
						prevContacts.filter((contact) => contact.id !== parseInt(id))
					);

					alert('Contact deleted successfully.');
					navigate('/contacts');
				} else {
					alert('Failed to delete the contact.');
				}
			})
			.catch((error) => {
				console.error('Error deleting contact:', error);
			});
	};

	const handleEdit = () => {
		setFormData(person);
		navigate('/create');
	};

	useEffect(() => {
		if (contactsData && id) {
			const matchingPerson = contactsData.find(
				(p) => p.id === parseInt(id, 10)
			);

			if (matchingPerson) {
				setPerson(matchingPerson);
			}
		}
	}, [contactsData, id]);

	if (!person)
		return (
			<>
				<NavigationMenu />
				<div className="contact-profile">
					<p className="loading">Loading...</p>
				</div>
			</>
		);

	return (
		<>
			<NavigationMenu />
			<div className="contact-profile">
				<article>
					<h2>
						{person.firstName} {person.lastName}
					</h2>

					<p>Street: {person.street}</p>
					<p>City: {person.city}</p>

					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</article>
			</div>
		</>
	);
}

export default ContactProfile;
