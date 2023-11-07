import "./style.css";

// utilities
import { postContactAsync } from "../../utilities/api";

// components
import AdditionalHeader from "../../components/Headers/AdditionalHeader";
import Form from "./components/Form";

const ContactFormPage = () => {
    const submitPostRequest = (data) => postContactAsync(data);

    return (
        <div className="contactForm">
            <AdditionalHeader />

            <Form submitPostRequest={submitPostRequest} />
        </div>
    );
};

export default ContactFormPage;
