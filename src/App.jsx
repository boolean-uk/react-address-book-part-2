import { Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import ContactItem from './components/ContactItem'

import './App.css';
import Menu from './components/Menu';

function App() {
    
    return (
        <>
        <Menu/>
        <Routes>
            <Route
            path="/"
            element={<ContactItem/>}
            />
            <Route 
            path="/Contacts"
            element={<Contacts/>}
            />
            <Route
            path="/AddContact"
            element={<AddContact/>}
            />
        </Routes>
        
        </>
    );
}

export default App;
