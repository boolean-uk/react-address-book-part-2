import { useState, useEffect } from "react"
import ContactList from "./ContactList"

export default function Dashboard() {

  const [contacts, setContacts] = useState([])
  const [reloadingNecessary, setReloadingNecessary] = useState(false)

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
    <>
    <main>
      <ContactList contacts={contacts} setReloadingNecessary={setReloadingNecessary}/>
    </main>
    </>
  )
}