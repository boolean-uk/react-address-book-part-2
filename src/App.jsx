import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

import SideMenu from './components/SideMenu'
import ContactForm from './components/ContactForm'
import ContactLister from './components/ContactLister'
import { useEffect, useState } from 'react'
import ContactView from './components/ContactView'

export default function App() {
    const [contacts, setContacts] = useState([])
    const [contactToEdit, setContactToEdit] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/migzus/contact')
        .then((res) => res.json())
        .then(setContacts)
    }, [])

    const addContactCallback = (newContact) => {
        setContacts([...contacts, newContact])
    }

    const requestEditCallback = (editContact) => {
        setContactToEdit(editContact)
        navigate('/edit_contact')
    }

    const requestDeletion = (id) => {
        fetch('https://boolean-api-server.fly.dev/migzus/contact/' + id, {
            method: "DELETE"
        })

        var _newList = [...contacts]
        var _removeIndex = contacts.findIndex((elm) => { return elm.id === id })
        if (_removeIndex >= 0) {
            _newList.splice(_removeIndex, 1)
            setContacts(_newList)
        }

        navigate('/')
    }

    return (
        <main>
        <div className='main_structure'>
            <SideMenu />
            <Routes>
                <Route index element={<ContactLister contacts={contacts} />} />
                <Route path='/create_contact' element={<ContactForm addContactCallback={addContactCallback} />} />
                <Route path='/view/:id' element={<ContactView contacts={contacts} requestEditCallback={requestEditCallback} requestDeletion={requestDeletion} />} />
                <Route path='/edit_contact' element={<ContactForm contactToEdit={contactToEdit} />} />
            </Routes>
        </div>
        </main>
    )
}
