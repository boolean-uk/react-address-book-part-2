import ContactListItem from "./ContactListItem";

function ContactList({data}) {

    return (
        <div>
            <h3>Contacts</h3>
            <ul>
                {data.map((person) => (
                    <li key={person.id}>
                        <ContactListItem firstName={person.firstName} lastName={person.lastName} id={person.id}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ContactList;