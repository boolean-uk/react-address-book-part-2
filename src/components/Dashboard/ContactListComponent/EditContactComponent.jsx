import { useState, useEffect } from 'react';
import { findContactById, updateContact } from '../../api/ContactAPI';
import { useNavigate, useParams } from 'react-router-dom';

export function EditContactComponent(props) {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams(); 
  const { setEditing } = props;
  const navigate = useNavigate()

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await findContactById(contactId);
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact details", error);
      }
    };

    if (contactId) {
      fetchContact();
    }
  }, [contactId]);

  // Ensure you check for contact before rendering form

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await updateContact(contactId, contact);
        console.log("Contact updated successfully");
        setEditing(false); 
        } catch (error) {
        console.error("Failed to update contact", error);
        }

        navigate(`/contacts/view/${contactId}`);
    };

      if (!contact) {
        return <div>Loading...</div>;
      }

    return (
      <div className="editContactForm">
        <form onSubmit={handleSubmit}>
          <label>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              value={contact.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>City</span>
            <input
              type="text"
              name="city"
              value={contact.city}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Street</span>
            <input
              type="text"
              name="street"
              value={contact.street}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Edit</button>
        </form>
      </div>
    );
}