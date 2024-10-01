import LeftMenu from "./components/LeftMenu";
import CreateContact from "./components/CreateContact";
import ContactDetails from "./components/ContactDetails";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LeftMenu />
      <Routes>
        <Route path="/create-contact" element={<CreateContact />}></Route>
        <Route path="/contact/:id" element={<ContactDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
