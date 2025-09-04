import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactDetail from './components/Contactdetail';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';

function App() {
    return (
        <Router>
            <div className='app-container'>
                <nav>
                    <h2>Menu</h2>
                    <Link to="/">Contact List</Link>{" "}
                    <Link to="/create">Create Contact</Link>
                </nav>

                <div className="main-list">
                    <Routes>
                        <Route path="/" element={<ContactList />} />
                        <Route path="/create" element={<CreateContact />} />
                        <Route path="/contact/:id" element={<ContactDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
