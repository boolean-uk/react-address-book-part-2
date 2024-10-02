import { useContext } from 'react';
import NavigationMenu from './NavigationMenu';
import { ContactsContext, FormContext } from '../context';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

function Form() {
	const { formData, setFormData } = useContext(FormContext);
	const { contactsData, setContactsData } = useContext(ContactsContext);
	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		if (formData.id) {
			updateContact(event);
		} else {
			createNewContact(event);
		}
	};

	const createNewContact = (event) => {
		event.preventDefault();
		const newContact = { ...formData, id: contactsData.length + 1 };

		fetch('https://boolean-uk-api-server.fly.dev/johnfa1508/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newContact),
		})
			.then((response) => response.json())
			.then(() => {
				setContactsData((prevContacts) => [...prevContacts, newContact]);

				alert('Contact created successfully.');
				navigate('/contacts');
			})
			.catch((error) => {
				console.error('Error creating new contact:', error);
			});

		setFormData({
			firstName: '',
			lastName: '',
			street: '',
			city: '',
			id: '',
		});
	};

	const updateContact = (event) => {
		event.preventDefault();
		const updatedContactsData = contactsData.map((contact) =>
			contact.id === formData.id ? { ...contact, ...formData } : contact
		);

		fetch(
			`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${formData.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
		)
			.then((response) => response.json())
			.then(() => {
				setContactsData(updatedContactsData);

				alert('Contact updated successfully.');
				navigate(`/view/${formData.id}`);
			})
			.catch((error) => {
				console.error('Error updating contact:', error);
			});

		setFormData({
			firstName: '',
			lastName: '',
			street: '',
			city: '',
			id: '',
		});
	};

	return (
		<>
			{formData.id ? '' : <NavigationMenu />}

			<form className="form" onSubmit={handleSubmit}>
				<h2>{formData.id ? 'Update Contact' : 'Create Contact'}</h2>
				<label>
					First Name:
					<input
						type="text"
						name="firstName"
						onChange={handleChange}
						value={formData.firstName}
					/>
				</label>

				<label>
					Last Name:
					<input
						type="text"
						name="lastName"
						onChange={handleChange}
						value={formData.lastName}
					/>
				</label>

				<label>
					Street:
					<input
						type="text"
						name="street"
						onChange={handleChange}
						value={formData.street}
					/>
				</label>

				<label>
					City:
					<input
						type="text"
						name="city"
						onChange={handleChange}
						value={formData.city}
					/>
				</label>

				<input className="form__submit" type="submit" value="Submit Survey!" />
			</form>
		</>
	);
}

export default Form;
