import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ContactsContext } from '../../App';
import MapComponent from '../Map/MapComponent';

function ContactInfo() {
  const navigate = useNavigate();
  const { data, url, setData } = useContext(ContactsContext);
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState({ latitude: null, longitude: null });

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}axel-ahlander/contact/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setData((prevData) => prevData.filter((item) => item.id !== currentUser.id));
      navigate('/contacts');
    }
  };

  useEffect(() => {
    const user = data.find((x) => x.id == id);
    setCurrentUser(user || null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoordinates({
            latitude: user?.latitude ?? position.coords.latitude,
            longitude: user?.longitude ?? position.coords.longitude,
          });
        },
      );
    }
  }, [id, data]);

  if (!currentUser || userCoordinates.latitude === null || userCoordinates.longitude === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="contact-info">
      <Link to="/contacts" className="return-link">
        <p id="return">Return to contact list</p>
      </Link>
      <div className="contact-details">
        <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
        <p><strong>Street:</strong> {currentUser.street}</p>
        <p><strong>City:</strong> {currentUser.city}</p>
      </div>

      <button className="delete-button" onClick={handleSubmitDelete}>
        Delete contact
      </button>
      <Link to={`/update-contact/${currentUser.id}`}>
        <button className="update-button">Update contact</button>
      </Link>
      <hr />

        <h3>
            Map Location
        </h3>
      <MapComponent latitude={userCoordinates.latitude} longitude={userCoordinates.longitude} />
    </div>
  );
}

export default ContactInfo;
