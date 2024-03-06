import React from "react";
import CreateContactForm from "./CreateContactForm";

function Dashboard({addNewContact}) {

    return (
        <>
        <CreateContactForm addNewContact={addNewContact}/>
        </>
    );
}

export default Dashboard;
