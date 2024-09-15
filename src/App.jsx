import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

// components
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import ContactFormPage from "./pages/ContactFormPage";

function App() {
    const [lastContact, setLastContact] = useState("1");

    return (
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={<DashboardPage lastContact={lastContact} />}
                />
                <Route
                    path="/new-contact"
                    element={
                        <ContactFormPage setLastContact={setLastContact} />
                    }
                />
                <Route
                    path="/contact-page/:id"
                    element={<ContactPage setLastContact={setLastContact} />}
                />
            </Routes>
        </div>
    );
}

export default App;
