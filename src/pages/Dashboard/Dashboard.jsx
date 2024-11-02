import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function Dashboard() {
  const { contacts } = useContext(AppContext);


    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.firstName} {contact.lastName} - 
              <Link to={`/contact/${contact.id}`}>View</Link>
            </li>
          ))}
        </ul>
      </div>
    );
      
  }
  
  export default Dashboard;