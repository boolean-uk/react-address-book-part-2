import { useState, useEffect } from "react"
import ContactList from "./ContactList"

export default function Dashboard(props) {

  const { reloadingNecessary, setReloadingNecessary } = props

  const [contacts, setContacts] = useState([])
  
  console.log("isreloading?", setReloadingNecessary)

  const loadContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact`

    fetch(baseURL + endpoint)
      .then(response => response.json())
      .then(data => setContacts(data))
      .then(() => console.log("loaded", contacts))
      .then(setReloadingNecessary(false))
  }

  useEffect(loadContact, [reloadingNecessary])

  return (
    <ContactList contacts={contacts} setReloadingNecessary={setReloadingNecessary}/>
  )
}