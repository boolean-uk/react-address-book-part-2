import { ContactContext } from "C:/Users/TMajlu/Documents/Java Workshop/Week 8/Day 3/react-address-book-part-2/src/App.jsx"
import { useContext } from "react";
import ContactItem from "./ContactItem";

function ContactList() {
    const context=useContext(ContactContext)
    const{contacts}=context
    return (
      <div>
        {contacts.map((contact, index) => <ContactItem contact={contact} key={index} num={Number(index)} />)}
      </div>
    )
  }
  
export default ContactList
