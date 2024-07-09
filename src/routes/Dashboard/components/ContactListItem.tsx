import { Link } from 'react-router-dom'
import { ContactListItemProps } from '../../../model'

export default function ContactListItem({ contact }: ContactListItemProps) {
    return (
        <div className='contact-wrapper'>
            <Link to={`/view/${contact.id}`} className='contact'>
                <span>
                    {contact.firstName} {contact.lastName}
                </span>
            </Link>
        </div>
    )
}
