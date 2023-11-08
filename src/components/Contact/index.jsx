import { useEffect, useState } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"

export default function Contact(props) {
    const [contact, setContact] = useState([])

    const {contactLists, setShouldGetData} = props

    const navigate = useNavigate()

    const  {id} = useParams()

    
    useEffect(() => {
        if (contactLists && id) {
            console.log(contactLists)
            const findContact = contactLists.find(contactList => Number(contactList.id) === Number(id))
            setContact(findContact)
            console.log('find contact', findContact)
        }
    }, [contactLists, id])


    const removeContact = () => {
        const option = {method: 'DELETE'}

        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${id}`, option)
        .then(res => res.json())
        .then(() => setShouldGetData(true))

        navigate('/contact-lists')
    }

   if (!contact) {
    return <p>Loading...</p>
   }
    return (
        <div className="contact">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}</p>
            <button onClick={removeContact}>Delete Contact</button>
        </div>
    )
}
