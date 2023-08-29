import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactUpdateForm from "./ContactUpdateForm";
import MapComponent from "./MapComponent";

function ContactInfo(props) {
    const [contact, setContact] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);
    const { contacts, setContacts } = props;
    const { id } = useParams();

    useEffect(() => {
        if (contacts.length > 0) {
            const foundContact = contacts.find((cnt) => cnt.id === parseInt(id));
            setContact(foundContact);
        }
    }, [contacts, id])

    function fetchCompleteContact() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${contact.id}`)
            .then(response => response.json())
            .then(data => {
                setIsMoreInfoVisible(true);
            })
            .catch(error => {
                console.error("Error fetching complete contact:", error);
            });

            if (!contact.address.street || !contact.address.city || !contact.username || !contact.email || !contact.phone || !contact.company || !contact.company.name) {
                return <div>Contact has no such information</div>;
            }

            if (!contact.geo) {
                return <div>Contact has no position information</div>;
            }
    }

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    if (!contact) {
        return <div>Contact not found</div>;
    }

    if (!contact.address) {
        return <div>Contact has no address information</div>;
    }

    if (!contact.address.street || !contact.address.city) {
        return <div>Contact has no address information</div>;
    }

    return (
        <main className="main">
            <h2>{contact.name}</h2>
            {contact && (<ul>
                <li className="contactInfo-item">
                    <p 
                    className="info">Lives in: 
                    </p>
                    <p> {contact.address.street} {contact.address.city}</p>
                    <button onClick={fetchCompleteContact}>See more...</button>
                </li>

                {isMoreInfoVisible && (
                    <>
                    <ul>
                        <li className="contactInfo-item">
                            <p 
                            className="info">Username:
                            </p>
                            <p> {contact.username  || 'no info'}</p>
                        </li>
                        <li className="contactInfo-item">
                            <p 
                            className="info">Email:
                            </p>
                            <p> {contact.email  || 'no info'}</p>
                        </li>
                        <li className="contactInfo-item">
                            <p 
                            className="info">Phone:
                            </p>
                            <p> {contact.phone  || 'no info'}</p>
                        </li>
                        <li className="contactInfo-item">
                            <p 
                            className="info">Works at:
                            </p>
                            <p> {contact.company ? contact.company.name || 'no info' : 'no info'}</p>
                        </li>
                    </ul>
                    <div className="map-container">
                    <MapComponent contact={contact} />
                  </div>
                  </>
                )}
            </ul>)}
            {isEditing ? (
                    <ContactUpdateForm
                    contacts={contacts}
                    setContacts={setContacts}
                    contactToUpdate={contact}
                    onCancel={handleCancel}
                    />
                ) : (
                    <>
                        <p className="custom-p">OR</p>
                        <input type="submit" value='Update' onClick={handleEdit}/>
                    </>
                )}
        </main>
    )
}
export default ContactInfo