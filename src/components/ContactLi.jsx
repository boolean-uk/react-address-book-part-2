import { Link } from "react-router-dom";

export default function ContactLi({ contact }) {
    return (
        <li>
            <p>{`${contact.firstName} ${contact.lastName}`}</p>
            <Link>View</Link>
        </li>
    )
}