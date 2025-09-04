import { useParams, useNavigate } from "react-router-dom";

function ContactDetails({data, fetchData}) {
    const { id } = useParams();
    const contact = data.find((x) => x.id == id)
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/hansjhaland/contact/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                fetchData();
                navigate("/");
            } else {
                alert("Failed to delete contact.");
            }
        } catch (error) {
        console.error("Error:", error);
        }
    }

    const handleUpdate = async () => {
        navigate(`/contacts/update/${id}`)
    }

    return (
        <>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>{contact.street}, {contact.city}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ContactDetails;