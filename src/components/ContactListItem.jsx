export default function ContactListItem(props) {
    const {contact} = props;
    console.log(contact);
    return (
        <li className="contact-list-item">
            <h3>{contact.firstName}  {contact.lastName}</h3>
        </li>);

    }