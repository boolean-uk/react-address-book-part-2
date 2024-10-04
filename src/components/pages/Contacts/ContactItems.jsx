import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function ContactItems(props) {


    // Recieves deleteContact from parent element, alongside a person ofc.
    // So my deletehandler then sends a call to the deleteContact, along with the persons ID.
    const { person, deleteContact } = props
    console.log(person)

    const handleDelete = () => {
        deleteContact(person.id)
    }

    const navigate = useNavigate();

    // Since it was too much hassle to change more css for different Link elements...
    // I can redirect with navigate, aaaand pass a state with the button instead. Which is kinda cool imo.
    const handleEditClick = () => {
        navigate(`/edit/${person.id}`, {state: {person}})
    }

    return (
        <li className="contact-item">
            <div className="contact-header">
                <h3>
                    {person.firstName} {person.lastName}
                </h3>
                <button
                className="editbutton"
                style={{marginLeft: 'auto'}}
                onClick={handleEditClick}
                >
                    Edit
                </button>
                <Link
                    style={{ marginLeft: '10px' }}
                    to={`/view/${person.id}`}
                    // state={{ person }} Im not using this to render the single contact, but I could!
                >
                    View
                </Link>
                <button
                    className="deletebutton"
                    style={{ marginLeft: '10px' }}
                    onClick={handleDelete}
                >Delete
                </button>
            </div>
        </li>
    )
}

export default ContactItems