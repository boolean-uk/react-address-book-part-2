import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateContact from "./pages/CreateContact";
import ContactDetails from "./pages/ContactDetails";
function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create a contact</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateContact />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </>
  );
}
export default App;
