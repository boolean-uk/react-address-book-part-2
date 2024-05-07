import { Route, Routes } from "react-router-dom";
import ContactsUl from "./ContactsUl";
import { useEffect, useState } from "react";
import CreateContactForm from "./CreateContactForm";
import ContactDetails from "./ContactDetails";

export default function MainComponent() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/MyrtheDullaart/contact')
        .then(response => response.json())
        .then(setContacts)
    }, [])

    console.log(contacts)

    return (
        <>
            <Routes>
                <Route 
                    path='/contacts'
                    element={<ContactsUl contacts={contacts}/>}
                />

                <Route 
                    path='/form'
                    element={<CreateContactForm contacts={contacts} setContacts={setContacts}/>}
                />

                <Route 
                    path='/contact/:id'
                    element={<ContactDetails contacts={contacts}/>}
                />
            </Routes>
        </>
    )
}