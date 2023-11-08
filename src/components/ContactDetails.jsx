import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";




export default function ContactDetails(props) {

  function ContactCardField({field}) {
    const humanFieldnames = {
      "firstName": "First Name",
      "lastName": "Last Name",
      "street": "Street",
      "city": "City",
      "id": "Added as contact #",
      "age": "Age",
      "pronouns": "Pronouns"
    }

    return (
      <div className="contactCard-entry">
        <p className="label">{(!!humanFieldnames[field] ? humanFieldnames[field] : field)}</p>
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

  const fields = [
    contact.street,
    contact.city,
    contact.phone
  ]

  console.log(Object.keys(contact).map(key => console.log(key)))

  return (
    <div className="contactCard">
      <h2>{contact.lastName + ", " + contact.firstName}</h2>
      <span className="pronouns">({(contact.pronouns || "unknown")})</span>
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