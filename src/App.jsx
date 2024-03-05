import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactProfile from "./components/ContactProfile";
import Form from "./components/Form";
import Menu from "./components/Menu";

function App() {

  return (
    <>
      <main className="dashboard-layout">
        <section>
          <Menu />
        </section>
        <section>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/contact/:id" element={<ContactProfile />} />
            <Route path="/contact" element={<ContactList />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
