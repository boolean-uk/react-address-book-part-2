import { useState } from "react"
import ContactList from "./ContactList";
import { useEffect } from "react";
import LeftMenu from "../leftMenu/LeftMenu";
import "./Dashboard.css"

function DashBoard () {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/StianNordvik/contact")
        .then(response => response.json())
        .then(data => setContacts(data))
    }, [])

    return(
    <div className="dashboardContainer">
      <LeftMenu />
      <div className="contactsView">
        <input className="searchBar" placeholder="Filter Contacts" onInput={(e) => setSearch(e.target.value)}/>
        <ContactList contacts={contacts} search={search}/>
      </div>
    </div>
    )
}

export default DashBoard