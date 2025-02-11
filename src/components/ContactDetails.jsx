import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../config';
import Map from './Map';

function ContactDetails() {
  const [contact, setContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchContactDetails();
  }, [id]);

  const fetchContactDetails = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(ENDPOINTS.contactDetails(id));
      if (!response.ok) throw new Error('Failed to fetch contact');
      const data = await response.json();
      setContact(data);
      setFormData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(ENDPOINTS.contactDetails(id), {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete contact');
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(ENDPOINTS.contactDetails(id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed to update contact');
      const updatedContact = await response.json();
      setContact(updatedContact);
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!contact) return <div className="error">Contact not found</div>;

  return (
    <div className="contact-details">
      {!isEditing ? (
        <>
          <h2>{contact.firstName} {contact.lastName}</h2>
          <p>Street: {contact.street}</p>
          <p>City: {contact.city}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phoneNumber}</p>
          {contact.latitude && contact.longitude && (
            <Map latitude={contact.latitude} longitude={contact.longitude} />
          )}
          <div className="button-group">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <h2>Edit Contact</h2>
          <div>
            <label>First Name:</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Street:</label>
            <input
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City:</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Latitude:</label>
            <input
              type="number"
              step="any"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <input
              type="number"
              step="any"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactDetails; 