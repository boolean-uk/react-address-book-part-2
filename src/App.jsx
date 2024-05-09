import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import ContactsList from './components/main-content/ContactsList';
import CreateForm from './components/main-content/CreateForm';
import ContactDetails from './components/main-content/ContactDetails';

function App() {
    const url = 'https://boolean-api-server.fly.dev/FBagdeli/contact'
    const [contacts , setContact] = useState([])
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(setContact)
    }, [])

    console.log(contacts)
    function handleSubmit(event){

        event.preventDefault()
        console.log('test' ,event.target.value)
        const formData = new FormData(event.target)
        const newContact = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            street: formData.get('street'),
            city: formData.get('city'),
            gender: "Male",
            email: "rick@sanchez.com",
            jobTitle: "Scientist",
            latitude: 42,
            longitude: 629,
            favouriteColour: "#0d7f26",
            profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
        }
        console.log('test', event)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setContact([... contacts, data])
        })


    }

    return (
        <>
            <nav>
                <Navigation />
            </nav>

            <Routes>
                <Route
                    path='/' element={<ContactsList contacts={contacts}/>}
                />
                <Route
                    path='/CreateContact' element={<CreateForm handleSubmit={handleSubmit}/>}
                />
                <Route
                    path='/Details/:id' element={<ContactDetails contacts={contacts}/>}
                />
            </Routes>
        </>
    );
}

export default App;
