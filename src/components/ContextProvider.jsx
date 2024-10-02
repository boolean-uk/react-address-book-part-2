import { ContactsContext, FormContext } from '../context.jsx';

function ContextProvider({
	children,
	formData,
	setFormData,
	contactsData,
	setContactsData,
	handleViewContact,
}) {
	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			<ContactsContext.Provider
				value={{ contactsData, setContactsData, handleViewContact }}
			>
				{children}
			</ContactsContext.Provider>
		</FormContext.Provider>
	);
}

export default ContextProvider;
