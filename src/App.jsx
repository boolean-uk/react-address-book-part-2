import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import ContactDetailsViewer from "./components/ContactDetailsViewer";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create-contact" element={<CreateContactPage />} />
          <Route path="/contact/:id/edit" element={<ContactDetails />} />
          <Route
            path="/contact/:id/details"
            element={<ContactDetailsViewer />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const CreateContactPage = () => {
  const [isCreatingContact, setIsCreatingContact] = useState(true);

  const handleContactCreated = () => {
    setIsCreatingContact(false);
  };

  return (
    <div>
      {isCreatingContact ? (
        <ContactForm
          onContactCreated={handleContactCreated}
          onCancel={() => setIsCreatingContact(false)}
        />
      ) : null}
    </div>
  );
};

export default App;
