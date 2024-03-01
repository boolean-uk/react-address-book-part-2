import PropTypes from "prop-types";
import "./App.css";
import { Link } from "react-router-dom";
function ContactsListPage(props) {
  if (!props.contactInfoList) return <p>Loading...</p>;

  return (
    <section>
      <p>Contact List</p>
      <ul>
        {props.contactInfoList.map((contact, index) => {
          return (
            <li className="contact no-list-style" key={index}>
              <div className="contact-list-box">
                {contact.firstName + " " + contact.lastName}
                <Link
                  className="contact-list-box-link"
                  to={`/contacts/${contact.id}`}
                >
                  View Contact
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default ContactsListPage;

ContactsListPage.propTypes = {
  contactsListPage: PropTypes.arrayOf(PropTypes.object),
};
