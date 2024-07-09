import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactDetails from './routes/ContactDetails/index.tsx'
import Dashboard from './routes/Dashboard'
import { Contact, API_URL } from './model'
import CreateContact from './routes/CreateContact/index.tsx'

export default function App() {
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setContacts(data)
            })
    }, [])

    return (
        <div className='wrapper'>
            <aside className='sidebar'>
                <Dashboard contacts={contacts} />
            </aside>
            <Routes>
                <Route
                    path='/view/:id'
                    element={<ContactDetails contacts={contacts} />}
                />
                <Route
                    path='/add'
                    element={<CreateContact contacts={contacts} />}
                />
                {/* I want to handle errors without
                    needing to refresh the page :) */}
                <Route
                    path='/*'
                    element={<EmptyView />}
                    errorElement={<EmptyView />}
                />
                {/* To my understanding it catches
                    all URLs except those defined above,
                    which are valid URLs anyways */}
            </Routes>
        </div>
    )
}

export function EmptyView() {
    return (
        <div className='detail-wrapper'>
            <span>No contact selected</span>
        </div>
    )
}
