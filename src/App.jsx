import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ContactDetails from './components/ContactDetails';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';


const username = 'Muzea001';    
function App() {
    return (
       
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard username = {username} />} />
                <Route path="/dashboard/:id" element={<ContactDetails username={username} />} />
                <Route path='/create' element = {<CreateContact username={username} />} />
                <Route path="/dashboard/:id/edit" element={<EditContact username={username} />} />
            </Routes>
        </Router>
    );
}

export default App;