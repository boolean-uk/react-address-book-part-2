import { useParams, useNavigate } from "react-router-dom"

function ContactDetailsPage({contactData}) {

    const {id} = useParams()
    const navigate = useNavigate()

    let contact = contactData.find((contact) => contact.id == id)
    // console.log("ID:", id)

    if (!contact) return (<p>Loading...</p>)

  return (
    <div>
        <h2>Contact Details:</h2>
        <h3>{contact.firstName} {contact.lastName}</h3>
        <p>City: {contact.city}</p>
        <p>Street: {contact.street}</p>
        <p>Job: {contact.jobTitle}</p>
        <p>Email: {contact.email}</p>

        <button onClick={() => navigate("/")}>Back</button>
    </div>

  )
}

export default ContactDetailsPage