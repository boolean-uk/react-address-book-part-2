import React from 'react';
import Menu from "../menu/Menu.jsx";
import ContactForm from "../contact_form/ContactForm.jsx";

function DashboardCreate(props) {
    return (
        <section className="dashboard">
            <Menu/>
            <section className="activeItem">
                <ContactForm/>
            </section>
        </section>
    );
}

export default DashboardCreate;