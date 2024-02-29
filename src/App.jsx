import { Link, Routes, Route, Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateNewContactFormPage from "./components/CreateNewContactFormPage.jsx";
import DetailedContactViewPage from "./components/DetailedContactViewPage.jsx";

function App() {
  return (
    <>
      <h1>Hello World</h1>

      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/createcontact" element={<CreateNewContactFormPage />} />
        <Route path="/view/:id" element={<DetailedContactViewPage />} z></Route>
      </Routes>
    </>
  );
}

export default App;
