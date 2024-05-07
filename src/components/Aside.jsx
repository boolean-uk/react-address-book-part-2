import { Link } from "react-router-dom";

export default function Aside() {
    return (
      <ul>
        <li><Link to='/contacts'>Contacts List</Link></li>
        <li>Add New Contact</li>
      </ul>
    )
}