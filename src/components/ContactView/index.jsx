import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ContactContext } from '../../App'

import { GoogleMap, Marker } from '@react-google-maps/api';
import useMaps from '../../hooks/maps';

const ContactView = () => {

    const API_KEY = import.meta.env.VITE_MAPS_KEY
    const { isLoaded, map, onLoad, onUnmount } = useMaps(
        API_KEY
    );

    const navigate = useNavigate()
    const [contact, setContact] = useState()

    const { contacts, setContacts } = useContext(ContactContext)

    const { id } = useParams()

    const DeleteContact = async () => {
        try {
            const result = window.confirm("Are you sure?")
            if(result) {
                const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/contact/${contact.id}`, {
                    method: 'delete',
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                setContacts(contacts.filter((c) => c.id !== contact.id))
                navigate("/")
            }

        } catch(error){
            console.error(error)
        }
    }

    useEffect(()=> {
        const c = contacts.find((c) => c.id == id)
        setContact(c)
    }, [])

   


    
    return (
        <div>
        <h1>{contact?.firstName} {contact?.lastName}</h1>
        <p>{contact?.street}, {contact?.city}</p>
        
        <button
            onClick={() => navigate(`/add`, { state: { personData: contact } })}
            className="contact-edit-btn"
        >
        Edit
        </button>
        <button onClick={() => DeleteContact()} className="contact-delete-btn">Delete</button>

        
        {(isLoaded && contact) && 
            <>
                <GoogleMap
                    mapContainerStyle={{
                        width: '400px',
                        height: '400px'
                    }}
                    center={{
                        lat: contact.latitude,
                        lng: contact.longitude
                    }}
                    zoom={10}
                >
                    <Marker position={{
                        lat: contact.latitude,
                        lng: contact.longitude
                    }}/>

                </GoogleMap>
            </>
        } 



        </div>
    )
}

export default ContactView
