import "../../style/contacts/ContactDetail.css";
import { useNavigate, useParams } from "react-router-dom";

const ContactDetail = ({ contacts, setContacts }) => {
    const { id } = useParams();
    const contact = contacts.find((p) => p.id === parseInt(id));

    let isLoaded = false;
    if (contact !== undefined) isLoaded = true;

    const nav = useNavigate();

    const ApiDeleteRequest = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const handleDeletion = () => {
        fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/contact/" + contact.id,
            ApiDeleteRequest
        );

        const newContacts = contacts.filter((p) => p.id !== contact.id);
        setContacts([...newContacts]);

        nav("/");
    };

    const goToEdit = () => {
        nav("/update/" + id);
    };

    return (
        <>
            {isLoaded ? (
                <div
                    className="contact-detail"
                    style={{ background: contact.favouriteColour }}
                >
                    <h2>{contact.firstName + " " + contact.lastName}</h2>
                    <p>{contact.street + " " + contact.city}</p>
                    <button onClick={goToEdit}>Edit</button>
                    <button onClick={handleDeletion}>Delete</button>
                    <iframe
                        width="100%"
                        height="250"
                        src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}
                    ></iframe>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default ContactDetail;
