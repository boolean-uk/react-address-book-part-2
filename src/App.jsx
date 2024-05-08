import './App.css';

import Nav from './pages/Nav';
import {Route, Routes} from 'react-router-dom'
import ContactListPage from './pages/ContactList';
import NewContactPage from './pages/NewContact';
import ContactDetailPage from './pages/ContactDetail';



function App() {
   
    return (
        <>

        <Nav/>

<main>
        <Routes>
        <Route 
        path='/'
        element={<ContactListPage/>}
        />
        <Route
        path='/new-contact'
        element={<NewContactPage/>}
        />

        <Route
        path='/contact/:id'
        element={<ContactDetailPage/>}
        />
        </Routes>
        </main>
        </>
    )
}

export default App;