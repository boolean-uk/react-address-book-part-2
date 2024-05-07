import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import CreateContact from './components/CreateContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'


function App() {



    return (
       <div className='container'>
        <Nav />
        <main>
        <Routes>
        <Route path='/' element={<p>Let's Get Started</p>} />
        <Route path='/add-new-contact' element={<CreateContact />} />
        <Route path='/contact-list' element={<ContactList />} />
        <Route path='/contact-list/:id' element={<ContactDetail />} />
        </Routes>
        </main>
       </div>
    );
}

export default App;
