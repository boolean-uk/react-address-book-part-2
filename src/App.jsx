import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/DashboardPage";
import Navigation from "./Pages/components/Navigation";
import ContactsPage from "./Pages/ContactsPage";
import CreateContactPage from "./Pages/CreateContactPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contacts/:contactId" element={<ContactPage />} />
        <Route path="/contacts/create" element={<CreateContactPage />} />
        <Route path="/contacts/:contactId/edit" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
