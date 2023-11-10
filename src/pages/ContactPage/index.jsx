import "./style.css";

// components
import AdditionalHeader from "../../components/Headers/AdditionalHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContactAsync, putContactAsync } from "../../utilities/api";
import ContactInfo from "./components/ContactInfo";

const ContactPage = ({ setLastContact }) => {
    const [contact, setContact] = useState({});

    const { id } = useParams();

    const getContact = () =>
        getContactAsync(id).then((data) => setContact(data));

    useEffect(() => {
        getContact();
        setLastContact(id);
    }, []);

    const submitPutRequest = (data) =>
        putContactAsync(id, data).then(() => getContact());

    return (
        <div className="contactPage">
            <AdditionalHeader />

            <ContactInfo
                contact={contact}
                submitPutRequest={submitPutRequest}
            />
        </div>
    );
};

export default ContactPage;
