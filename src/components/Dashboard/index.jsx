import { ListItem } from "./ListItem";
import { Link } from "react-router-dom";

export const Dashboard = ({contacts}) => {
    return (
      <div className="contact-menu">
        <h2>Contacts</h2>
        <Link to="/create" className="create-link profile-link">Create contact</Link>
        {contacts.map((contact) => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </div>
    );
} 
