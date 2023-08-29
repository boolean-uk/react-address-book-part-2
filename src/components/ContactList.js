import { Link } from "react-router-dom"
import "../css/contacts.css"




function ContactList({ contacts }) {

    // console.log(contacts)
    return (
        <div className='menu-screen-right'>

            <h1 className='header-sections-right'>
                Contacts
            </h1>

            {!contacts ? "loading..." :
                contacts.map((contact, idx) => {
                    return (
                        <div key={contact.id} className="name-container">
                            <div className="contacts-list-overview-item">
                                <p>{contact.name}</p>
                                <Link
                                    to={`/contact-list/${idx}`
                                    }
                                    state={{ contact }}
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    )
                })
            }


        </div >
    )
}
export default ContactList