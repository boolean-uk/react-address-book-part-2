
import { useContext, useState } from 'react'
import { DataContext, DisplayContext } from '../App.jsx'
import Contact from './Contact.jsx'

function ContactList() {

    const { data } = useContext(DataContext)
    const { setDisplayForm } = useContext(DisplayContext)

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredData = data.filter((contact) => 
        contact.firstName.toLowerCase().includes(search.toLowerCase()) || 
        contact.lastName.toLowerCase().includes(search.toLowerCase))

    return (
        <>
        <div className="contact-box">
            <label htmlFor="search">Search</label>
            <input 
                type="text"
                id="search"
                name="search"
                onChange={handleChange}
                value={search}
            />
            <ul className="contact-list">
                {filteredData.map((contact, index) => (
                    <li key={index}>
                        <Contact contact={contact} showDetails={false} setDisplayForm={setDisplayForm}/>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ContactList