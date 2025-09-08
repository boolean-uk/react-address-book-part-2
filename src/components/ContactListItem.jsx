export default function ContactListItem({ contact, onClick, onDelete }) {
  return (
    <li onClick={onClick} style={{ cursor: "pointer", margin: "0.5rem 0" }}>
      {contact.firstName} {contact.lastName}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
