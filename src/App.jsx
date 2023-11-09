import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';

//https://boolean-api-server.fly.dev/LAVINIABENZAR/contact



function App() {
    return (
        <BrowserRouter>
      <ul className='home-link'>
                <li><Link className="nav-link" to={'/'}>Home</Link></li>
                <li><Link className="nav-link" to={'/contacts'}>Contacts</Link></li>
                <li><Link className="nav-link" to={'/newcontact'}>Add New Contact</Link></li>
     </ul>
      
       <Routes>

       <Route 
        path='/'
        element={<Home/>}
        />

        <Route
        path='/contacts'
        element={<Contacts/>}
        />

        <Route
        path='/newcontact'
        element={<NewContact/>}/>

        <Route
        path='/contact/:id'
        element={<Contact/>}/>

       </Routes>
    
        </BrowserRouter>
    
        
    );
}

export default App;
