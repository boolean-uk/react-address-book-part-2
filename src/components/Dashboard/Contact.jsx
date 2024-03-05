import { Link } from 'react-router-dom';

function Contact(props) {
    const { contact } = props

    return (
        <li className='contact'>
            <div className='contact-info'>
                <h3>
                    {contact.firstName} {contact.lastName}
                </h3>
                <Link to={`/contacts/${contact.id}`}>
                    <button>
                        View
                    </button>

                </Link>
            </div>
        </li>
    )
}

export default Contact