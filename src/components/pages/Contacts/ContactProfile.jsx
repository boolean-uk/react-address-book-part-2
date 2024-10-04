import { useParams } from "react-router-dom";
import { usePeople } from "../../../context/PeopleProvider";
import '../CSS/ContactProfile.css'


function ContactProfile() {
    const { people} = usePeople();
    const { id } = useParams();


    const contact = people.find(c => c.id === parseInt(id));
    console.log("Now viewing:")
    console.log(contact)

    return (
        <>
            <h3>
                {contact.firstName} {contact.lastName}
            </h3>
            <p>{contact.street} - {contact.city}</p>
        </>
    )
}

export default ContactProfile