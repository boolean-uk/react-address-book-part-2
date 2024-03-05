import { useParams, useNavigate } from "react-router-dom"

function ContactDetailsPage({contactData, fetchContacts}) {
    const {id} = useParams()
    const navigate = useNavigate()

    let contact = contactData.find((contact) => contact.id == id)
    // console.log("ID:", id)

    if (!contact) return (<p>Loading...</p>)



        async function handleDelete(id)
        {
            const response = await fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'},
            })
    
            if(!response) console.log("DELETE ERROR")

            fetchContacts()
            navigate("/contacts")
        }

  return (
    <div>
        <h2>Contact Details:</h2>
        <h3>{contact.firstName} {contact.lastName}</h3>
        <p>City: {contact.city}</p>
        <p>Street: {contact.street}</p>
        <p>Job: {contact.jobTitle}</p>
        <p>Email: {contact.email}</p>

        <button onClick={() => navigate("/contacts")}>Back</button>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>

    </div>

  )
}

export default ContactDetailsPage