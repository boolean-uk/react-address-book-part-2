import { Link, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './pages/Dashboard';
import ContactDetails from './pages/ContactDetails';
import CreateContact from './pages/CreateContact';
import UpdateContact from './pages/UpdateContact';
function App() {
    return (
        <div className='all'>
            <div className='header'>
                <Link to="/" className='homeButton'>🏡HOME</Link>
            </div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contact/:id" element={<ContactDetails />} />
                <Route path="/create" element={<CreateContact />} />
                <Route path="/update/:id" element={<UpdateContact />} />
            </Routes>
        </div>
    );
}

export default App;
