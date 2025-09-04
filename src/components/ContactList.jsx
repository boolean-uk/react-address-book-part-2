import ContactListItem from "./ContactListItem";
import { useState, useEffect } from "react";

function ContactList({data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const filtered = data.filter((person) =>
            person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered)
    }, [searchTerm, data]);

    return (
        <div>
            <h3>Contacts</h3>
                <input
                    type="text"
                    placeholder="Search contact name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
                />
            <ul>
                {filteredData.map((person) => (
                    <li key={person.id}>
                        <ContactListItem firstName={person.firstName} lastName={person.lastName} id={person.id}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ContactList;