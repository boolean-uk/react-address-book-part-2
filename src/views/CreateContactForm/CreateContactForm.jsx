import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../DataProvider";

function CreateContactForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { contacts, createContact, updateContact } = useContext(DataContext);
    
    const existingContact = id ? contacts.find(c => c.id === Number(id)) : null;
    const isUpdating = !!existingContact;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        favouriteColour: "#000000"
    });

    useEffect(() => {
        if (existingContact) {
            setFormData({
                firstName: existingContact.firstName,
                lastName: existingContact.lastName,
                email: existingContact.email,
                street: existingContact.street,
                city: existingContact.city,
                favouriteColour: existingContact.favouriteColour || "#000000"
            });
        }
    }, [existingContact]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const contactData = {
                ...formData,
                gender: isUpdating ? existingContact.gender : "Not Specified",
                jobTitle: isUpdating ? existingContact.jobTitle : "Not Specified",
                latitude: isUpdating ? existingContact.latitude : 0,
                longitude: isUpdating ? existingContact.longitude : 0,
                profileImage: isUpdating ? existingContact.profileImage : "https://www.gravatar.com/avatar/default?s=120&d=identicon"
            };
            
            if (isUpdating) {
                const updatedContact = await updateContact(Number(id), contactData);
                navigate(`/contact/${updatedContact.id}`);
            } else {
                const newContact = await createContact(contactData);
                navigate(`/contact/${newContact.id}`);
            }
        } catch (error) {
            console.error("Failed to create/update contact:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (id && !existingContact) {
        console.log("Not found because id is: ", id , " and existingContact is: ", existingContact);
        return <div>Contact not found</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isUpdating ? "Edit Contact" : "Create New Contact"}</h2>
            <div>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Street:
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Favourite Color:
                    <input
                        type="color"
                        name="favouriteColour"
                        value={formData.favouriteColour}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">
                {isUpdating ? "Update Contact" : "Create Contact"}
            </button>
        </form>
    );
}

export default CreateContactForm;