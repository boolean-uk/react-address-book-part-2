import ContactsListItem from './ContactsListItem'
import { useContext } from "react"
import { MyContext } from '/src/App'
import { useEffect} from 'react';


export default function ContactsList() {
  
    const { contacts, setContacts } = useContext(MyContext)

useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact`)
        .then((res) => res.json())
        .then((data) => setContacts(data))
         
     },[])


  return (
    <ul>
      {contacts?.map((contact, index) => (
        <ContactsListItem key={index} contact={contact}/>
      ))}
    </ul>
  );
}
