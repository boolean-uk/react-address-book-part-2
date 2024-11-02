function View({contact}) {
  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <ul>
        <li><strong>Firstname:</strong> {contact.firstName}</li>
        <li><strong>Lastname:</strong> {contact.lastName}</li>
        <li><strong>City:</strong> {contact.city}</li>
        <li><strong>Street:</strong> {contact.street}</li>
      </ul>
    </div>
  );
    
}

export default View;