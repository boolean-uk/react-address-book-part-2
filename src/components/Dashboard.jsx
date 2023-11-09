import { useState, useEffect } from "react"
import ContactList from "./ContactList"

export default function Dashboard(props) {

  const { reloadingNecessary, setReloadingNecessary, deleteContact } = props

  const [contacts, setContacts] = useState([])

  const loadContact = () => {
    const username = "loza01"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact`

    fetch(baseURL + endpoint)
      .then(response => response.json())
      .then(data => setContacts(data))
      .then(setReloadingNecessary(false))
  }

  useEffect(loadContact, [reloadingNecessary])

  return (
    <ContactList contacts={contacts} setReloadingNecessary={setReloadingNecessary} deleteContact={deleteContact}/>
  )
}