import { useParams } from "react-router-dom";

function ContactInfo({ contacts }) {
    const { id } = useParams();
    const item = contacts.find((x) => x.id === Number(id));

    return(
        <>
            <h2>{item.firstName} {item.lastName}</h2>
            <p>{item.street}, {item.city}</p>
        </>
    )
}

export default ContactInfo;