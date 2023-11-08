import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function EditContact() {
    
  const {id} = useParams()
  const [contact, setContact] = useState({})
  const [form, setForm] = useState({})

  const fetchContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`
    
    fetch(baseURL + endpoint)
      .then(res => res.json()) 
      .then(data => {
        setContact(data)
        setForm(data)})
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
            placeholder={name}
            value={value}
            onChange={e => {
              console.log(e.target.name, e.target.value)
              setForm({...form, [e.target.name]: e.target.value})
            }}
            />
        </div>
    )
  }

  return(
    <form onSubmit={(e) => console.log("submit", e.target[0].value)}>
      {Object.keys(contact).map((key, index) => <FormField key={index} name={key} value={contact[key]} type="text" />)}
      <button className = "submit-button" type = "submit">Update Contact</button>
    </form>
  )
}