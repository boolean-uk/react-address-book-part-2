import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';  

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Contact List</Link>
                        </li>
                        <li>
                            <Link to="/create">Create a contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<ContactList />} />
                    <Route path="/contact/:id" element={<ContactDetails />} />
                    <Route path="/contact/:id/edit" element={<EditContact />} />  
                    <Route path="/create" element={<CreateContact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
