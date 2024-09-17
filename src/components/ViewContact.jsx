import { useNavigate, useParams } from "react-router-dom";

export default function ViewContact(props)
{
    const { id } = useParams()
    const { contacts, deleteContact } = props
    const contact = contacts[id - 1]

    const navigate = useNavigate()

    const handleDelete = () =>
    {
        deleteContact({contact})
        navigate("/")
    }

    const handleEdit = () =>
    {
        navigate(`/editContact/${id}`)
    }

    return (
        <>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.street} {contact.city} </p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </>
    )
}