import { useNavigate, useParams } from "react-router-dom";

const ContactDetail = ({ contacts, setContacts }) => {
    const { id } = useParams();
    const person = contacts.find((p) => p.id === parseInt(id));

    const nav = useNavigate();

    const ApiDeleteRequest = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const handleDeletion = () => {
        fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/contact/" + person.id,
            ApiDeleteRequest
        );

        const newContacts = contacts.filter((p) => p.id !== person.id);
        setContacts([...newContacts]);

        nav("/");
    };

    const goToEdit = () => {
        nav("/update/" + id);
    };

    return (
        <>
            <h2>{person.firstName + " " + person.lastName}</h2>
            <p>{person.street + " " + person.city}</p>
            <button onClick={goToEdit}>Edit</button>
            <button onClick={handleDeletion}>Delete</button>
        </>
    );
};

export default ContactDetail;
