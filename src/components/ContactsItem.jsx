import './ContactsItem.css';

function ContactsItem({ contact, handleProfileClick: click }) {

const handleProfileClick = () => {
    click(contact);
}

  return (
    <li className="contact-card" onClick={handleProfileClick}>
      <div className="contact-content">
        <h3 className="contact-name">
          {contact.firstName} {contact.lastName}
        </h3>
      </div>
    </li>
  );
}

export default ContactsItem;