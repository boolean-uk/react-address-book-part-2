import "./style.css";

// components
import AdditionalHeader from "../../components/Headers/AdditionalHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContactAsync } from "../../utilities/api";
import ContactInfo from "./components/ContactInfo";

const ContactPage = ({ setLastContact }) => {
    const [contact, setContact] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getContactAsync(id).then((data) => setContact(data));
        setLastContact(id);
    }, []);

    return (
        <div className="contactPage">
            <AdditionalHeader />

            <ContactInfo contact={contact} />
        </div>
    );
};

export default ContactPage;
