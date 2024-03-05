import ContactList from "./Components/contactList/ContactList";
import PropTypes from 'prop-types'
import { createContext } from "react";
export const ContactContext = createContext();

Dashboard.propTypes = {
    contacts: PropTypes.array,
    setContact: PropTypes.func
  }


export default function Dashboard(props) {
  const { contacts, setContact} = props

  
  return (
    
    <ContactContext.Provider
      value={{contacts, setContact}}
    >
      <main className='dashboard'>
          <header className="dashboard-head">Dashboard</header>
          <section className="xxx">
              {contacts && contacts.length > 0 &&<ContactList contacts={contacts} setContact={setContact}/>}
          </section>
      </main>
    </ContactContext.Provider>
    
  )
}
