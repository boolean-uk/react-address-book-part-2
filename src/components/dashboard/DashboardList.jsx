import React from 'react';
import Menu from "../menu/Menu.jsx";
import ContactList from "../contact_list/ContactList.jsx";

function DashboardList(props) {
    return (
        <section className="dashboard">
            <Menu/>
            <section className="activeItem">
                <ContactList/>
            </section>
        </section>
    );
}

export default DashboardList;