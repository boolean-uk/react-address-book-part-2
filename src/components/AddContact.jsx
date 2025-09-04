import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContactContext } from "../App";
import { useParams, useNavigate } from 'react-router-dom'


function AddContact() {
    const { setContacts, url,contacts } = useContext(ContactContext);
    const { id } = useParams();
    const navigate = useNavigate();

    let emptyContact = { firstName: '', lastName: '',street:'', city:'' }
    // console.log(id)
    const [contact, setContact] = useState(emptyContact);

    useEffect(() => {
        if(!id) return;
        const contactToEdit = contacts.filter((c) => String(c.id) === id)[0];
        if (contactToEdit) {
            setContact(contactToEdit)
        }
    }, [id, contacts])

    const addContact = (c) => {
        c.preventDefault()
        
        const updateData = async () => {
            await fetch(url,
                {
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:JSON.stringify(contact)
                }
            );
        };
        updateData();
        setContacts(prev => [...prev, contact])
        setContact(emptyContact)
    }

    const editContact = (c) => {
        c.preventDefault()
        
        const updateData = async () => {
            await fetch(url +'/'+ id,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body:JSON.stringify(contact)
                }
            );
        };
        updateData();
        setContacts(prev => prev.map(c => c.id === contact.id ? contact : c));
        
        navigate('/')
    }
    const submitContact = (c) => {
        c.preventDefault();
        if (!id) {
            addContact(c);
        } else {
            editContact(c)
        }
    }

    return <>
        <h1>Add contact</h1>
        <form onSubmit={submitContact}>
            <h3>first name</h3>
            <div>
                <textarea
                    className="firstName"
                    type="text"
                    value={contact.firstName}
                    onChange={(e) => setContact({ ...contact, firstName: e.target.value })}>

                </textarea>
            </div>

            <h3>last name</h3>
            <div>
                <textarea
                    className="lastName"
                    type="text"
                    value={contact.lastName}
                    onChange={(e) => setContact({ ...contact, lastName: e.target.value })}>
                </textarea>
            </div>

            <h3>street</h3>
            <div>
                <textarea
                    className="street"
                    type="text"
                    value={contact.street}
                    onChange={(e) => setContact({ ...contact, street: e.target.value })}>

                </textarea>
            </div>

            <h3>city</h3>
            <div>
                <textarea
                    className="city"
                    type="text"
                    value={contact.city}
                    onChange={(e) => setContact({ ...contact, city: e.target.value })}>

                </textarea>
            </div>


            <div>
                <button type="submit">save</button>
            </div>

        </form>
    </>
}

export default AddContact;