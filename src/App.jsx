import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ContactsList from "./components/Contacts/ContactsList";
import { useEffect, useState } from "react";
import ContactDetail from "./components/Contacts/ContactDetail";
import ContactCreate from "./components/Contacts/ContactCreate";

function App() {
    const [contacts, setContacts] = useState([
        {
            id: 0,
            firstName: "Guy",
            lastName: "Haley",
            street: "34 something street",
            city: "Cityname",
        },
        {
            id: 1,
            firstName: "Dan",
            lastName: "Abnett",
            street: "420 blaze it street",
            city: "Cityname",
        },
    ]);

    const ApiRequest = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

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
                    element={<ContactDetail data={contacts} />}
                />
            </Routes>
        </Layout>
    );
}

export default App;
