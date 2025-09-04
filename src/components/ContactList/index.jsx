import ContactListItem from "./components/ContactListItem"

export default function ContactsList(props) {
    const {contacts} = props
    console.log(contacts)

    if (contacts.length <= 0) return (
    <>
    <h1>Contact List</h1>
    <p>No contacts in your list</p>
    </>
    )

    return (
    <>
    <h1>Contacts</h1>
    <element>
       
        {contacts.map((contact, index) => (
            <div key={index}>
            <ContactListItem contact={contact}/>
            </div>
        ))}
    </element>
    </>)
}