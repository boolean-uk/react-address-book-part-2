import { ListItem } from "./ListItem";

export const Dashboard = ({contacts}) => {
    return (
      <div>
        <h2>Contacts</h2>
        {contacts.map((contact) => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </div>
    );
} 