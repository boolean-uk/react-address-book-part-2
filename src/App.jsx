import "./App.css"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Nav from "./pages/Nav"
import ContactForm from "./pages/ContactForm"
import ContactView from "./pages/ContactView"
function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-contact" element={<ContactForm />} />

                <Route path="/contact/:id" element={<ContactView />} />
            </Routes>
        </>
    )
}

export default App
