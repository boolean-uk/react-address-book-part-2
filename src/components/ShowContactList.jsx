import "./ShowContact.css";
function ShowContactList(props) {
  const { contactlist } = props;

  return (
    <>
      <h1>Contacts</h1>
      {contactlist.map((contact) => (
        <div className="contact-box" key={contact.id}>
          <p>{`${contact.firstName} ${contact.lastName}`}</p>
          <p>view</p>
        </div>
      ))}
    </>
  );
}

export default ShowContactList;
