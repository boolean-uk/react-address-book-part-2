import { useParams } from "react-router-dom";

export default function ViewContact(props)
{
    const { id } = useParams()
    const { contacts } = props
    const contact = contacts[id - 1]

    return (
        <>
        <div className="container_view">
        <img src={contact.profileImage} alt="" className="icon"/>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>Street: {contact.street}</p>
            <p>City:  {contact.city}</p> 
            <p> Email: {contact.email}</p>
            

            </div>
        </>
    )
}