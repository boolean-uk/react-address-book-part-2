import PropTypes from "prop-types";
import "./App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ContactsListPage(props) {
  if (!props.contactInfoList) return <p>Loading...</p>;

  useEffect(() => {
    //location.reload();  <=== this caused an infinate loop. DO NOT USE THIS!
  }, []);
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
  contactInfoList: PropTypes.arrayOf(PropTypes.object),
};
