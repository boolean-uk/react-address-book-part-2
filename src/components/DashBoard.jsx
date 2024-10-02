import { Link } from 'react-router-dom';

const Dashboard = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
            <Link to={`/edit/${contact.id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
