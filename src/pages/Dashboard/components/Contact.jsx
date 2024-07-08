export default function Contact(props) {
  const { contact } = props;

  return (
    <li className="contact-list-item">
      <img src={contact.profileImage} alt={contact.firstName} />
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <a href={`/contact/${contact.id}`}>View</a>
    </li>
  );
}
