import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ContactsList from "./components/Contacts/ContactsList";
import { useEffect, useState } from "react";
import ContactDetail from "./components/Contacts/ContactDetail";
import ContactCreate from "./components/Contacts/ContactCreate";
import ContactUpdate from "./components/Contacts/ContactUpdate";

function App() {
    const [contacts, setContacts] = useState([]);

    const getData = async () => {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/contact"
        );
        const data = await response.json();
        console.log(data);
        setContacts([...data]);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<ContactsList contacts={contacts} />} />
                <Route
                    path="/create/"
                    element={
                        <ContactCreate
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    }
                />
                <Route
                    path="/detail/:id"
                    element={
                        <ContactDetail
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    }
                />
                <Route
                    path="/update/:id"
                    element={
                        <ContactUpdate
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
