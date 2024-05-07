import { Route, Routes } from "react-router-dom";
import ContactsUl from "./ContactsUl";
import { useEffect, useState } from "react";

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
                    element={<ContactsUl />}
                />
            </Routes>
        </>
    )
}