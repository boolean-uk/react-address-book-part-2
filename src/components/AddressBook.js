import { Link } from "react-router-dom";

function AddressBook({ idx, contact }) {
  return (
    <div className="menuLeft">
      <h1 className="headerLeft">
        <Link to={"/"}>My Address Book</Link>
      </h1>
      <nav className="nav">
        <ul>
          <li>
            {idx !== undefined && contact ? (
              <Link to={`/contact-list/${idx}`} state={{ contact }}>
                View Details
              </Link>
            ) : (
              <Link to="/contact-list">Contact List</Link>
            )}
          </li>
          <li>
            <Link to="/new-contact">Add New Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AddressBook;
