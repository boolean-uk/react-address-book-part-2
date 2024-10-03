import { useContext } from "react";
import { GlobalContext } from "../App.jsx";
import ContactList from "./ContactList";

export default function Dashboard() {
  const { contacts } = useContext(GlobalContext);
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <ContactList contacts={contacts} />
      </section>
    </main>
  );
}
