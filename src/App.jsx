import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ContactsList from "./components/Contacts/ContactsList";
import { useEffect, useState } from "react";
import ContactDetail from "./components/Contacts/ContactDetail";
import ContactCreate from "./components/Contacts/ContactCreate";

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
                <Route path="/" element={<ContactsList data={contacts} />} />
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
                            data={contacts}
                            setContacts={setContacts}
                        />
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
