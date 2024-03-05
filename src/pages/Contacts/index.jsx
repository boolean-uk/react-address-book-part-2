import {Link } from 'react-router-dom'
import Modal from './components/Modal'
import { useEffect, useState } from 'react';


function Contacts(){

    const [modal, setModal] = useState()
    const [deleteId, setDeleteId] = useState(null)
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredContacts, setFilteredContacts] = useState([])
    const [current, setCurrent] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/uerbzr/contact")
        .then(res => res.json())
        .then(data => {
            setContacts(data)
            setCurrent(contacts)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching contacts', error)
            setLoading(false)
        })
    }, [loading])

    const handleChange = (id) => {
        setModal(!modal)
        setDeleteId(id)
    }

    const onYes = async (id) => {
        await fetch(`https://boolean-api-server.fly.dev/uerbzr/contact/${id}`,{ method: 'DELETE'})
        setLoading(true)
        setModal(false)
    }

    const onNo = () => {
        handleChange()
    }

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value)
        filterBySearchQuery()
    }

    const filterBySearchQuery = () => {
        const filtered = contacts.filter((c) => {
            if (searchQuery === ''){
                return true
            } else {
                return (
                    c.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.email.toLowerCase().includes(searchQuery.toLowerCase())
                )
            }
        })
        setFilteredContacts(filtered)
        setCurrent(filtered)
    }

    return (
    <>  
    <input type='text' placeholder='write to search' style={{margin: '5px'}} onChange={handleSearchInput}/>   
    {loading ? (<p>Loading ...</p>) :(<>{current.map((contact, index) => (
        <div key={index} className="contact">
            <h4 style={{color: contact.favouriteColour}}>{contact.firstName} {contact.lastName}</h4>
            <Link to={`view/${contact.id}`}>
            <p>View</p>
            </Link>
            <Link to={`edit/${contact.id}`}>
            <p>Edit</p>
            </Link>
            <p className='p-link' style={{textDecoration: 'underline'}} onClick={() => handleChange(contact.id)}>Delete</p>{
                modal && (<Modal onYes={() => onYes(deleteId)} onNo={onNo} />)
            }
        </div>
    ))
    }</>)}
</>
)
}

export default Contacts