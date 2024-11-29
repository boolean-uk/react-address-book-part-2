import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import CreateContactForm from './components/CreateContact'
import EditContactForm from './components/EditContactForm'
import { ContactProvider } from './context/ContactContext.jsx'


export default function App() {
    return (
        <ContactProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/contacts" />} />
                    <Route path="/contacts" element={<ContactList />} />
                    <Route path="/contacts/:id" element={<ContactDetails />} />
                    <Route path="/contacts/:id/edit" element={<EditContactForm />} />
                    <Route path="/create-contact" element={<CreateContactForm />} />
                </Routes>
            </Router>
        </ContactProvider>
    )
}
