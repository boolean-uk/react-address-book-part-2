import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/contacts'}>Contact List</Link>
                </li>
                <li>
                    <Link to={'/add-contact'}>Add Contact</Link>
                </li>
            </ul>
        </>
    )
}