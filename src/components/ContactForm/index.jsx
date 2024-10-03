import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ContactContext } from '../../App';
import useMaps from '../../hooks/maps';

import { GoogleMap, Marker } from '@react-google-maps/api';

const ContactForm = () => {

    const API_KEY = import.meta.env.VITE_MAPS_KEY
    const { isLoaded, map, onLoad, onUnmount } = useMaps(
        API_KEY
    );

    const local = useLocation()

    const [newContact, setNewContact] = useState(true)

    const { contacts, setContacts } = useContext(ContactContext)
    
    const navigate = useNavigate()

    const PostData = async (formData) => {
        try {
            const response = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
    
            if(!response.ok){
                console.log("Error occured, response not ok");
            }
            setContacts([...contacts, formData])
            navigate("/")
        } catch(error){
            console.error(error)
        }
    }
    
    const PutData = async (formData) => {
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/espensl2000/contact/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
    
            if(!response.ok){
                console.log("Error occured, response not ok");
            }
            let temp = contacts.filter((c) => c.id !== formData.id)
            temp.push(formData)
            setContacts(temp)
            navigate(`/view/${formData.id}`)
        } catch(error){
            console.error(error)
        }
    }

    const [validatorReaction, setValidatorReaction] = useState([])

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    })


    useEffect(()=>{

        if(local.state){
            const { personData } = local.state
            setNewContact(false)
            setFormData(personData)
        }
    }, [])

    function handleSubmit(event){
        event.preventDefault()

        let reactions = []
            
        if(formData.firstName === ""){
            reactions.push(1)
            
        } 
        if(formData.lastName === ""){
            reactions.push(2)
            
        }
        if(formData.street === ""){
            reactions.push(3)
        } 
        if(formData.city === "") {
            reactions.push(4)            
        } 
            
        
        if(formData.firstName !== "" && formData.lastName !== "" && formData.city !== "" && formData.street !== ""){
            
            let data = {
                ...formData,
            }
            if(location){
                data = {
                    ...formData,
                    latitude: location.lat,
                    longitude: location.lng
                }
            }

            if(newContact){
                PostData(data)    
                console.log("new")
            } else {
                console.log(data)
                PutData(data)
            }
        }

        setValidatorReaction(reactions)

        setInterval(() => {
            setValidatorReaction([])
            
        }, 2000)


    }

    function handleInput(event){
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const [location, setLocation] = useState()

    const handleMarkerClick = (event) => {
        setLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        })
    }

    return (
    <div>
        <h1>{newContact ? 'Add new contact' : 'Edit contact'}</h1>
        <form className="addcontact-form" onSubmit={handleSubmit}>
            <label>First name</label>
            <input
                value={formData.firstName}
                name="firstName"
                onChange={handleInput}
                className={validatorReaction.includes(1) ? 'addcontact-form-input-invalid':'addcontact-form-input'}
            />

            <label>Last name</label>
            <input
                value={formData.lastName}
                name="lastName"
                onChange={handleInput}
                className={validatorReaction.includes(2) ? 'addcontact-form-input-invalid':'addcontact-form-input'}
            />

            <label>Street</label>
            <input
                value={formData.street}
                name="street"
                onChange={handleInput}
                className={validatorReaction.includes(3) ? 'addcontact-form-input-invalid':'addcontact-form-input'}
            />

            <label>City</label>
            <input
                value={formData.city}
                name="city"
                onChange={handleInput}
                className={validatorReaction.includes(4) ? 'addcontact-form-input-invalid':'addcontact-form-input'}
            />

            {isLoaded &&

            <>
                <label>Location</label>
                <GoogleMap
                    mapContainerStyle={{
                        width: '400px',
                        height: '400px'
                    }}                    
                    center={{
                        lat: location ? location.lat : 60,
                        lng: location ? location.lng : 10
                    }}
                    zoom={5}
                    
                    onClick={handleMarkerClick}
                >
                    {location && <>
                        <Marker position={location} />
                    </>}
                </GoogleMap>
            </>

            }
            <button className="addcontact-form-btn">{newContact ? 'Create' : 'Save'}</button>
        </form>

      
    </div>
  )
}

export default ContactForm
