import { useParams } from "react-router-dom";

function ContactDetails({data}) {
    const { id } = useParams();
    const contact = data.find((x) => x.id == id)
    console.log(contact)
    return (
        <>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>{contact.street}, {contact.city}</p>
        </>
    )
}

export default ContactDetails;