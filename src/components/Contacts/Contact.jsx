import { Link } from "react-router-dom";

const Contact = ({ data }) => {
    return (
        <li className="contacts-item">
            <p>{data.firstName + " " + data.lastName}</p>
            <Link to={"/detail/" + data.id}>view</Link>
        </li>
    );
};

export default Contact;
