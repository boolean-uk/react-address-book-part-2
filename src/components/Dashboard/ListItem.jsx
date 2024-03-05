import { Link } from "react-router-dom";

export const ListItem = ({ contact }) => {
  return (
    <div className="list-item-container">
      <Link to={`/${contact.id}`} className="profile-link">
        <img src={contact.profileImage} alt="Profile" className="small-profile-image" />
        <div className="name-container">
          <span className="first-name">{contact.firstName} </span>
          <span className="last-name">{contact.lastName}</span>
        </div>
      </Link>
    </div>
  );
};
