import { Route, Routes } from 'react-router-dom'
import './App.css'

import SideMenu from './components/SideMenu'
import ContactForm from './components/ContactForm'
import ContactLister from './components/ContactLister'
import { useEffect, useState } from 'react'
import ContactView from './components/ContactView'

export default function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/migzus/contact')
        .then((res) => res.json())
        .then(setContacts)
    }, [])

    const addContactCallback = (newContact) => {
        setContacts([...contacts, newContact])
    }

    return (
        <main>
        <div className='main_structure'>
            <SideMenu />
            <Routes>
                <Route index element={<ContactLister contacts={contacts} />} />
                <Route path='/create_contact' element={<ContactForm addContactCallback={addContactCallback} />} />
                <Route path='/view/:id' element={<ContactView contacts={contacts} />} />
            </Routes>
        </div>
        </main>
    )
}
