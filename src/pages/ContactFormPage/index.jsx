import "./style.css";

// components
import AdditionalHeader from "../../components/Headers/AdditionalHeader";
import Form from "./components/Form";

const ContactFormPage = () => {
    return (
        <div className="contactForm">
            <AdditionalHeader />

            <Form />
        </div>
    );
};

export default ContactFormPage;
