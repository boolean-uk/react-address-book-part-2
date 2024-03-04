import { Link } from "react-router-dom"

export default function ContactListItemComponent(props){
    const { contact } = props


    return (
        <li className='listItem'>
            <div className='name'>
                {contact.firstName}
            </div>
            <Link to={`/view/${contact.id}`} className="view">
                View
            </Link>
        </li>
    )
}