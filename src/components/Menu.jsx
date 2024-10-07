import { Link } from "react-router-dom";
import { useContext } from 'react';
import { contactContext } from "../App";

export default function Menu() {
    const { contacts } = useContext(contactContext)
    return (
        <div>
            <ul>

                <Link to={'/'}>
                    <li>Contact List</li>
                </Link>

                <Link to={'/form'}>
                    <li>Add New Contact</li>
                </Link>
            </ul>
        </div>
    )
}