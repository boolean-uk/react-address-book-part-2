import LeftMenu from './LeftMenu'
import ContactList from './ContactList'
import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom'
import NewContactForm from './NewContactForm'
import Contact from './Contact'
import DeleteContact from './DeleteContact'
import EditContact from './EditContact'

const getSearchContacts = (contacts, search) =>
    contacts.filter(contact =>
        (contact.firstName.toLowerCase() + " " + contact.lastName.toLowerCase())
        .includes(search.toLowerCase()))

function Dashboard() {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState("")

    async function update() {
        await fetch("https://boolean-api-server.fly.dev/kristianverduin/contact")
            .then(res => res.json())
            .then(setContacts)
    }

    useEffect(() => {
        update()
    }, [])

    let filteredContacts = contacts

    if (search !== "") 
        filteredContacts = getSearchContacts(filteredContacts, search)

    return (
        <>
            <main className="dashboard">
                <header className='left-menu'>
                    <LeftMenu />
                </header>
                <Routes>
                    <Route 
                        path="/"
                        element=
                        {<ContactList contacts={filteredContacts} setContacts={setContacts} setSearch={setSearch} />}
                    />
                    <Route 
                        path="/view/:id"
                        element=
                        {<Contact contacts={contacts} setContacts={setContacts} />}
                    />
                    <Route 
                        path="/new"
                        element=
                        {<NewContactForm update={update} />}
                    />
                    <Route 
                        path="/delete/:id"
                        element=
                        {<DeleteContact contacts={contacts} update={update} />}
                    />
                    <Route 
                        path="/edit/:id"
                        element=
                        {<EditContact contacts={contacts} update={update} />}
                    />
                </Routes>
            </main>
        </>
  )
}

export default Dashboard
