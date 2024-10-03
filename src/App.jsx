import { createContext, useEffect, useState } from "react";
import * as API from './API'
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import ContactSingle from './components/ContactSingle';
import CreateContact from "./components/CreateContact";
import UpdateContact from "./components/UpdateContact";

const ContactsContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()

    useEffect(() => async function () {
        setContacts(await API.get("contact"));
    }, [])

    const deleteContact = async (id) => {
        const response = await API.deleteOne("contact", id)
        switch (response.httpRes.status) {
            case 200:
                console.log("200 ok")
                setContacts(await API.get("contact"));
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            case 404:
                console.log("404 not found")
                break;
            default:
                console.log("Unknown status code received.")
        }
        console.log(response)
        navigate("/")
    }

    const addContact = async (obj) => {
        const response = await API.post("contact", obj)
        switch (response.httpRes.status) {
            case 201:
                console.log("201 created")
                setContacts(await API.get("contact"));
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            default:
                console.log("Unknown status code received.")
        }
        console.log(response)
        navigate("/")
    }

    const updateContact = async (id, obj) => {
        const response = await API.put("contact", id, obj)
        switch (response.httpRes.status) {
            case 200:
                console.log("200 ok")
                setContacts(await API.get("contact"));
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            default:
                console.log("Unknown status code received.")
        }
        console.log(response)
        navigate("/view/" + id)
    }

    return (
        <>
            <ContactsContext.Provider value={{ contacts, addContact, deleteContact, updateContact }}>
                <Routes>
                    <Route path='/' element={<Container />} />
                    <Route path='/view/:id' element={<ContactSingle contacts={contacts} />} />
                    <Route path='/edit/:id' element={<UpdateContact contacts={contacts} />} />
                    <Route path='/create' element={<CreateContact />} />
                </Routes>
            </ContactsContext.Provider>
        </>
    );
}

export { App, ContactsContext };
