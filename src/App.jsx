import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <nav className="menu">
          <h2>Menu</h2>
          <ul>
            <li><Link to="/">Contacts List</Link></li>
            <li><Link to="/add-contact">Add New Contact</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/contact/:id" element={<ContactDetails />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


