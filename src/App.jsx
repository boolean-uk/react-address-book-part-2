import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import CreateContact from './components/CreateContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import EditContact from './components/EditContact'


function App() {



    return (
       <div className='container'>
        <Nav />
        <main>
        <Routes>
        <Route path='/' element={<p>Let us Get Started</p>} />
        <Route path='/add-new-contact' element={<CreateContact />} />
        <Route path='/contact-list' element={<ContactList />} />
        <Route path='/contact-list/:id' element={<ContactDetail />} />
        <Route path='/contact-list/edit/:id' element={<EditContact />} />
        </Routes>
        </main>
       </div>
    );
}

export default App;
