import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateContactForm from "./CreateContactForm";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function Dashboard() {

    return (
        <>
        <CreateContactForm/>
        </>
    );
}

export default Dashboard;
