import ContactItem from "./ContactItem";
function ContactList(props) {
  const { contactData } = props;

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contactData.map((person, index) => (
          <ContactItem key={index} keydata={index} person={person} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
