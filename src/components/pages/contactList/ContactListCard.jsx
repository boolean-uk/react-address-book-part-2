function ContactListCard({ contact }) {
  return (
    <li className="card">
      <img src={contact.profileImage}></img>
      <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
      <p></p>
    </li>
  );
}

export default ContactListCard;
