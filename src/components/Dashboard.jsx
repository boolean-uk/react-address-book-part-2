import { useState } from "react";
import ContactsList from "./ContactsList";

function Dashboard(props) {
  const { contacts } = props;
  const [filter, setFilter] = useState("");
  return (
    <>
      <div className="filter">
        <div>Search </div>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ContactsList contacts={contacts} filter={filter.toLowerCase()} />
    </>
  );
}
export default Dashboard;
