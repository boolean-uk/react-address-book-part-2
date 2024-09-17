/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function ContactList(props) {

    const {getContactData, contactData, setcontactData, isLoading, setisLoading } = props


    useEffect(() => {
        getContactData()
    }, [])



    if(isLoading) {
        return <p> loading.... </p>
    }

    return (
        <>
           <h1> Contact Details</h1>
           <ul>
              {contactData.map((contact) => (
                <div className="eachperson">
                  
                        <li className="eachcontact" key={contact.id}> <h3> {contact.firstName} {contact.lastName} </h3>
                        <Link to={`/contactlist/${contact.id}`} state={contact}> view more </Link>
                        </li>
                    
                    
                </div>
              ))}
           </ul>
        </>
    )
}

export default ContactList