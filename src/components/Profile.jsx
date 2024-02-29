import { useParams } from "react-router-dom";

export const Profile = ({contacts}) => {
  const { id } = useParams();
  
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) { return <h2>Contact not found</h2> }
  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street}, {contact.city}</p>
      <p>{contact.id}</p>
    </div>
  );
}