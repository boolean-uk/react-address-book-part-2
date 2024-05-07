export default function Contact({ contact }) {
    return (
        <li>
            <h3>{contact.firstName} {contact.lastName} </h3>
            <p>{contact.id}</p>
            <button>View Contact</button>
            <button>Edit Contact</button>
            <button>Delete Contact</button>
        </li>
    )
}