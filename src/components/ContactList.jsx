import ContactsItem from './contactsItem';
import './ContactList.css'
import { useNavigate } from 'react-router-dom';

function ContactList({ contacts, handleProfileClick }) {

const navigate = useNavigate();

const handleBack = () => {
    navigate('/');
}

  return (
  <>
    <div>
      <button className='back-to-menu-button' onClick={handleBack}>Back to menu</button>
    </div>
    <div className="contacts-container">
      <h2 className="contacts-heading"> Your Contacts</h2>
      <ul className="contacts-list">
        {contacts.map((contact, index) => (
          <div key={index}>
          <ContactsItem contact={contact} handleProfileClick={handleProfileClick}/>
          </div>
        ))}
      </ul>
    </div>
  </>
  );
}

export default ContactList;
