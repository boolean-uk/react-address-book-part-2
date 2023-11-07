import { Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import ContactFormPage from "./pages/ContactFormPage";

function App() {
    return (
        <div className="container">
            <Header />

            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/new-contact" element={<ContactFormPage />} />
                <Route path="/contact-page/:id" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
