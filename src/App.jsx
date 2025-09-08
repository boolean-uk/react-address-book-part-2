import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactDashboard from "./components/ContactDashboard";
import CreateContactForm from "./components/CreateContactForm";

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/create">Create Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ContactDashboard />} />
        <Route path="/create" element={<CreateContactForm />} />
      </Routes>
    </Router>
  );
}
