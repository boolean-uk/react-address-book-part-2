import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import Form from "./components/Form";
import ContactDetail from "./components/ContactDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ContactList />} />
          <Route path="/contact-form" element={<Form />} />
          <Route path="/view/:id" element={<ContactDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
