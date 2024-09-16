import { Link, useParams } from "react-router-dom";

const Contact = (props) => {


    const {contact} = props ?? {}

    const {username} = useParams();

    return (
        <>
        
        <h4>
            <Link to={`/${username}/contactProfile/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>

        </h4>
        <img src={`${contact.profileImage}`}/>
        </>
    ); 
}

export default Contact;