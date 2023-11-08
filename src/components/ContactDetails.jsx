import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";




export default function ContactDetails(props) {

  function ContactCardField({field}) {
    //only fields that are not just in lowercase will be mapped
    const humanFieldnames = {
      "firstName": "First Name",
      "lastName": "Last Name",
    }

    const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

    return (
      <div className="contactCard-entry">
        <p className="label">{(!!humanFieldnames[field] ? humanFieldnames[field] : capitalize(field))}</p>
        <p>{(contact[field] || "unknown")}</p>
      </div>
    )
  }

  const [contact, setContact] = useState({})

  const {deleteContact} = props
  const navigate = useNavigate()
  
  const {id} = useParams()

  const fetchContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`
    
    fetch(baseURL + endpoint)
      .then(res => res.json()) 
      .then(data =>  
        (setContact(data)))
  }

  useEffect(
    fetchContact
  , [])

  return (
    <div className="contactCard">
      <h2>{contact.lastName + ", " + contact.firstName}</h2>
      {Object.keys(contact).map((field, index) => {
        const filterOutKeys = ["firstName", "lastName", "id"]
        if (filterOutKeys.includes(field) === false) {
         return <ContactCardField key={index} field={field}/>
        }
      })}
      <button className="delete" onClick={() => {deleteContact(id)
        navigate("/")}}>Delete</button>
    </div>
  )
}