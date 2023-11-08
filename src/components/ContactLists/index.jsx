import { useEffect, useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"

export default function ContactLists(props) {
    // const [contactLists, setContactLists] = useState([])
    const {contactLists, setContactLists} = props

    const navigate = useNavigate()

    console.log('ContactLists', contactLists)
    return (
        <>
       <div className="contacts">
            <div className="contacts-header">
            <h2>Contacts</h2>
            <button onClick={() => navigate('/')}>Go Home</button>
            </div>
            {contactLists.map((contactList, index) => (
                <li className="list" key={index}>
                    <p className="name">{contactList.firstName} {contactList.lastName}</p>
                    <Link
                        className="link" to={`/contact-lists/${contactList.id}`}
                        //  state={{data: contactList}}
                    >
                        View contact
                    </Link>
                    
                </li>
            ))}
       </div>
        </>
    )
}