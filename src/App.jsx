import './App.css';
import {useEffect, useState} from 'react'
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import ContactList from './components/ContactList'
import ContactView from './components/ContactView'
import ContactForm from './components/ContactForm'
//import backArrow from './assets/icons/back-arrow.png'
//import sampleContacts from './sampleContacts.json'
const emptyContact = {
    
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
    street: "",
    city: "",
    latitude: -24.784,
    longitude: -169.3637,
    favouriteColour: "#efdf2e",
    profileImage: "https://www.gravatar.com/avatar/Sandrine_Ziemann26@yahoo.com?s=120&d=identicon",
     }

function App() {
const [isLoading, setLoading] = useState(true);
const [contacts, setContacts] = useState([emptyContact])
const [serverLink, setServerLink] = useState('https://boolean-api-server.fly.dev/carob16/contact')
let postContact = emptyContact;
let navigate = useNavigate();

//------POST-REQUEST-------------
const AddContact = async(input)=>{
    setLoading(true);
    postContact = input;
    console.log(postContact)
    
    try {
        const response = await fetch('https://boolean-api-server.fly.dev/carob16/contact',
        { method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
          });
        const json = await response.json();
        setContacts([...contacts, json]);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

//------POST-REQUEST-------------
const UpdateContact = async(input)=>{
    const id = input.id;
    delete input.id;
    
    try {
        const response = await fetch(`https://boolean-api-server.fly.dev/carob16/contact/`+id,
        { method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
          });
        const json = await response.json();
        let updateArr = contacts.map((contact)=>(contact.id !== json.id? contact:json))
        setContacts(updateArr);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
        navigate('/view/'+id)
    }
};



//------DELETE-REQUEST------------------------------------
const RemoveContact = async (id)=>{
    try {
        
        const response = await fetch(`https://boolean-api-server.fly.dev/carob16/contact/`+id,
        { method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          });
        const json = await response.json();
          let updateArr = contacts.filter(element=>element.id !== json.id)
        setContacts(updateArr);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};


    
//----GET ALL----------------------------------------
useEffect(()=>{
    fetch(serverLink)
    .then(res => res.json())
    .then(data => setContacts(data))

    setLoading(false)
    
},[serverLink])

    return (<>
        <header className='header'>
            <nav>
                <Link to='/'><h1 className='inline'>Address Book</h1></Link>
                <Link to='/'><p className='inline'>All contacts</p></Link>
                <Link to='/add'><p className='inline'>Create new contact</p></Link>
            </nav>  
        </header>
        <main>
            {isLoading?<p>Loading...</p>:<p></p>}
        <Routes>
            <Route path='/' element={<ContactList contacts={contacts}/>}/>
            <Route path='/view/undefined' element={<ContactList contacts={contacts}/>}/>
            <Route path='/view/:id' element={<ContactView contacts={contacts} RemoveElement={RemoveContact}/>}/>
            <Route path='/edit/:id' element={<ContactForm contacts={contacts} divTitle={'Edit contact'} saveContact={(input)=>UpdateContact(input)}/>}/>
            <Route path='/add' element={<ContactForm divTitle={'Create new contact'} saveContact={(input)=>AddContact(input)}/>}/>
        </Routes>
        </main>
        </>
    );
}

export default App;
