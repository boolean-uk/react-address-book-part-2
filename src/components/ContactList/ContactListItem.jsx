export default function ContactListItem({contact, id}) {

    return (
        <li key={id}>
            <p>{contact.firstName} {contact.lastName}</p>
            <p>View More</p>
        </li>
    )
}