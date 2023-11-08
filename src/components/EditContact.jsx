import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Form from "./Form/Form"

export default function EditContact() {
    
  const {id} = useParams()
  const [contact, setContact] = useState({})

  const fetchContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`
    
    fetch(baseURL + endpoint)
      .then(res => res.json()) 
      .then(data =>  
        (setContact(data)))
  }

  useEffect(fetchContact, [])
  
  function FormField (props) {
    const {name, value, type} = props

    return(
        <div className="form-element">
            <label htmlFor={name}>{name}</label>
            <input
            name = {name} 
            type = {type} 
            placeholder = {name}
            value={value}
            onChange={e => setContact({...contact, [e.target.name]: e.target.value})}
            />
        </div>
    )
  }

  return(
    <>
    {Object.keys(contact).map((key, index) => <FormField key={index} name={key} value={contact[key]} type="text" />)}
    </>
  )
}