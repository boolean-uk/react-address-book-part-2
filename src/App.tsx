import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import AlterContact from './pages/CreateContactsPage/AlterContact';
import { User } from './objects/UserObjects';
import Dashboard from './pages/Dashboard/DashBoard';
import NavigationBar from './components/NavigationBar';
import { Route, Router, Routes } from 'react-router-dom';

export interface ContactsManagement {
    contacts: User[];
    setContacts: Dispatch<SetStateAction<User[]>>;
    alteredContact: User;
    setAlteredContact:  Dispatch<SetStateAction<User>>;
    contactCreated: boolean;
    setContactCreated: Dispatch<SetStateAction<boolean>>;
    deleteContact: boolean;
    setDeleteContact: Dispatch<SetStateAction<boolean>>;
    contactUpdated: boolean;
    setContactUpdated: Dispatch<SetStateAction<boolean>>; 
    alterContactMode: AlterContactModes;
    setAlterContactMode: Dispatch<SetStateAction<AlterContactModes>>;
    
    
}
export const ContactsContext = createContext<ContactsManagement>({} as ContactsManagement)
const contactsURL = "https://boolean-uk-api-server.fly.dev/Skutlis/contact"

export enum AlterContactModes{
    Create = "Create",
    Update = "Update"
}



function App() {
    const [contacts, setContacts] = useState<User[]>([]); 
    const [alteredContact, setAlteredContact] = useState({} as User) // Holds the data for a create or update contact
    const [contactCreated, setContactCreated] = useState<boolean>(false); // Notifies app to run the POST
    const [contactUpdated, setContactUpdated] = useState<boolean>(false); // Notifies the app to run the PUT
    const [dbUpdated, setDbUpdated] = useState<boolean>(false); // Notifies the app to run the GET (all)
    const [alterContactMode, setAlterContactMode] = useState<AlterContactModes>(AlterContactModes.Create) // Either create or update
    
    const [deleteContact, setDeleteContact] = useState<boolean>(false); 

    // Get contacts
    useEffect(() => {
        fetch(contactsURL)
            .then(response =>  response.json())
            .then(data => setContacts(data))
    }, [dbUpdated]);

    // Add a contact
    useEffect(() => {
        if (Object.keys(alteredContact).length !== 0){
            fetch(contactsURL, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(alteredContact)
            }).then((response) => response.json())
            .then(() => {
                setDbUpdated(!dbUpdated); // Alert the system to fetch the users once again
                setAlteredContact({} as User)
            }); 
        }
    
    }, [contactCreated])

    // Delete a contact
    useEffect(() => {
        if(Object.keys(alteredContact).length !== 0){
            fetch(contactsURL + "/" + alteredContact.id.toString(), {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                }).then((response) => response.json())
            .then(() => {
                setDbUpdated(!dbUpdated); // Alert the system to fetch the users once again
            });
        }
          
    }, [deleteContact])

    // Update contact
    useEffect(() => {
        if (Object.keys(alteredContact).length !== 0){
            fetch(contactsURL + "/" + alteredContact.id, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(alteredContact)
            }).then((response) => response.json())
            .then(() => setDbUpdated(!dbUpdated)); // Alert the system to fetch the users once again
        }
        
    }, [contactUpdated])

    

    return (
        <ContactsContext.Provider value={{contacts, setContacts, alteredContact, setAlteredContact, 
                                        contactCreated, setContactCreated, deleteContact, setDeleteContact,
                                        contactUpdated, setContactUpdated, alterContactMode, setAlterContactMode}}>
        <div>
            <NavigationBar />
        </div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="AlterContact" element={<AlterContact />} />
        </Routes>

        </ContactsContext.Provider>
    );
}

export default App;
