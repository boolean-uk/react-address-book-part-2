function UpdateContactForm({ contact, onInputChange, onSave }) {
  console.log(contact);
  return (
    <>
      <form className="create-contact-form">
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            placeholder="first name"
            onChange={onInputChange}
            value={contact.firstName}
          />
        </label>
        <label>
          Surname:
          <input
            name="lastName"
            type="text"
            placeholder="Surname"
            onChange={onInputChange}
            value={contact.lastName}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            type="text"
            placeholder="City"
            onChange={onInputChange}
            value={contact.city}
          />
        </label>
        <label>
          Street:
          <input
            name="street"
            type="text"
            placeholder="Street"
            onChange={onInputChange}
            value={contact.street}
          />
        </label>
      </form>
      <button className="event-button" type="button" onClick={onSave}>
        <span className="material-symbols-outlined">save</span>
      </button>
    </>
  );
}

export default UpdateContactForm;
