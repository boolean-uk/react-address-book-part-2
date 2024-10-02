import Contact from "./components/Contact"
import { useState, useEffect, useContext  } from 'react'
import { useParams } from 'react-router-dom'
import { ContactContext } from "C:/Users/TMajlu/Documents/Java Workshop/Week 8/Day 3/react-address-book-part-2/src/App.jsx"


function Individual() {
    const [contact, setContact]=useState(null)
    const context=useContext(ContactContext)
    const{contacts}=context
    

    const {id} = useParams();
    
    
    useEffect(() => {
        setContact(contacts[Number(id)])
    }, [contacts, id])
    
    

    return (
        <main className="contact">
        <div>
            <Contact contact={contact}/>
        </div>
        </main>
    )
    }
  
export default Individual