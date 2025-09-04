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

    return (
        <>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>{contact.street}, {contact.city}</p>
            <button onClick={handleDelete}>Delete Contact</button>
        </>
    )
}

export default ContactDetails;