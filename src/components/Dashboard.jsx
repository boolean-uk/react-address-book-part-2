import { useContext, useState } from "react";
import { Context } from "../App";
import ContactList from "./ContactList";
import '../style/DashboardCSS.css'


function Dashboard() {

    const { contacts } = useContext(Context)


    return (
        <main className="dashoard">
            <h2>Contacts</h2>
            <ContactList contactList={contacts} />
        </main>
    );

}

export default Dashboard