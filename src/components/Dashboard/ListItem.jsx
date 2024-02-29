import { Link } from "react-router-dom";

export const ListItem = ({contact}) => {
    return (
      <div className="list-item-container">
        <Link to={`/${contact.id}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </div>
    );
}
