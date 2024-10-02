import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import ContactProfile from './components/ContactProfile';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import ContextProvider from './components/ContextProvider';

function App() {
	const [contactsData, setContactsData] = useState([]);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		street: '',
		city: '',
		id: '',
	});

	return (
		<>
			<div className="main-content">
				<ContextProvider
					contactsData={contactsData}
					setContactsData={setContactsData}
					formData={formData}
					setFormData={setFormData}
				>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/contacts" element={<ContactsList />} />
							<Route path="/create" element={<Form />} />
							<Route path="/view/:id" element={<ContactProfile />} />
						</Routes>
					</BrowserRouter>
				</ContextProvider>
			</div>
		</>
	);
}

export default App;
