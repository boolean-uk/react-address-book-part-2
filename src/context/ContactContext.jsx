import { createContext, useContext, useState, useEffect } from "react"

const ContactContext = createContext()

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContacts() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error("useContacts must be used within a ContactsProvider")
  }
  return context
}
