import { useNavigate, Link } from "react-router-dom"
import ContactListItem from "./ContactListItem"

function ContactList({contactData}) {

  const navigate = useNavigate()

  return (
  <>
  <header>
    <Link to={"/"}>
      <button>Back</button>
    </Link>
    {/* <Link to={"/contacts/create"}>
      <button>Create Contact</button>
    </Link> */}
  </header>
          <h2>Contact List:</h2>
        <ul>
            {contactData ? contactData.map((contact, i) =>
            <ContactListItem index={i} contact={contact}/>) 
            : "Loading..."}
        </ul>
  </>
  )
}

export default ContactList