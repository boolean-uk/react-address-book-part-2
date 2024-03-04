import { useParams } from "react-router-dom";

const ContactDetail = ({ data }) => {
    const { id } = useParams();
    const person = data.find((p) => p.id === parseInt(id));
    console.log(data);
    return (
        <>
            <h2>{person.firstName + " " + person.lastName}</h2>
            <p>{person.street + " " + person.city}</p>
        </>
    );
};

export default ContactDetail;
