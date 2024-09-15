import "./style.css";

// utilities
import { postContactAsync } from "../../utilities/api";

// components
import AdditionalHeader from "../../components/Headers/AdditionalHeader";
import Form from "./components/Form";

const ContactFormPage = ({ setLastContact }) => {
    const submitPostRequest = (data) => postContactAsync(data);

    return (
        <div className="contactForm">
            <AdditionalHeader />

            <Form
                submitPostRequest={submitPostRequest}
                setLastContact={setLastContact}
            />
        </div>
    );
};

export default ContactFormPage;
