import { useEffect, useState } from "react";

// components
import Map from "./Map";

// images
import editIcon from "../../../assets/images/edit-icon.svg";

const ContactInfo = ({ contact, submitPutRequest }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        setEditForm(contact);
    }, [contact]);

    const handleChange = (event) => {
        const { name, type, value } = event.target;

        type === "number"
            ? setEditForm({ ...editForm, [name]: parseInt(value) })
            : setEditForm({ ...editForm, [name]: value });
    };

    const submitHandle = () => {
        submitPutRequest(editForm);
        setIsEdit(false);
    };

    return (
        <div className="contactInfo">
            <div
                className="contactInfo__edit"
                onClick={() => setIsEdit(!isEdit)}
            >
                <img src={editIcon} />
            </div>
            <div className="contactInfo__topBlock">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    alt="contact-photo"
                    className="contactInfo__topBlock-photo"
                />
                <div className="contactInfo__mainInfo">
                    {isEdit ? (
                        <div className="editName">
                            <input
                                className="editInput"
                                type="text"
                                value={editForm.firstName}
                                onChange={handleChange}
                                name="firstName"
                            />
                            <input
                                className="editInput"
                                type="text"
                                value={editForm.lastName}
                                onChange={handleChange}
                                name="lastName"
                            />
                        </div>
                    ) : (
                        <h2 className="contactInfo__mainInfo-name">
                            {contact.firstName} {contact.lastName}
                        </h2>
                    )}
                    {isEdit ? (
                        <input
                            className="editInput"
                            type="text"
                            value={editForm.jobTitle}
                            onChange={handleChange}
                            name="jobTitle"
                        />
                    ) : (
                        <p className="contactInfo__mainInfo-jobTitle">
                            {contact.jobTitle}
                        </p>
                    )}
                </div>
            </div>
            <div className="contactInfo__content">
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">Email</h3>
                    {isEdit ? (
                        <input
                            className="editInput editInput-specific"
                            type="text"
                            value={editForm.email}
                            onChange={handleChange}
                            name="email"
                        />
                    ) : (
                        <p className="contactInfo__item-text">
                            {contact.email}
                        </p>
                    )}
                </section>
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">Street</h3>
                    {isEdit ? (
                        <input
                            className="editInput editInput-specific"
                            type="text"
                            value={editForm.street}
                            onChange={handleChange}
                            name="street"
                        />
                    ) : (
                        <p className="contactInfo__item-text">
                            {contact.street}
                        </p>
                    )}
                </section>
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">City</h3>
                    {isEdit ? (
                        <input
                            className="editInput editInput-specific"
                            type="text"
                            value={editForm.city}
                            onChange={handleChange}
                            name="city"
                        />
                    ) : (
                        <p className="contactInfo__item-text">{contact.city}</p>
                    )}
                </section>
                <section className="contactInfo__item">
                    <h3 className="contactInfo__item-title">Gender</h3>
                    {isEdit ? (
                        <input
                            className="editInput editInput-specific"
                            type="text"
                            value={editForm.gender}
                            onChange={handleChange}
                            name="gender"
                        />
                    ) : (
                        <p className="contactInfo__item-text">
                            {contact.gender}
                        </p>
                    )}
                </section>
            </div>
            {isEdit ? (
                <div className="editMap">
                    <input
                        className="editInput"
                        type="text"
                        value={editForm.latitude}
                        onChange={handleChange}
                        name="latitude"
                    />
                    <input
                        className="editInput"
                        type="text"
                        value={editForm.longitude}
                        onChange={handleChange}
                        name="longitude"
                    />
                </div>
            ) : (
                <Map
                    center={{ lat: contact.latitude, lng: contact.longitude }}
                />
            )}
            {isEdit && (
                <div className="editButton">
                    <button
                        className="editButton__button"
                        onClick={submitHandle}
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContactInfo;
