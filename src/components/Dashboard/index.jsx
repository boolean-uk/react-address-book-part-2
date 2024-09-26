import PropTypes from "prop-types";
import ContactList from "./ContactList";

function Dashboard({ contacts }) {
  return (
    <div className="parent">
      <section>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </section>
    </div>
  );
}

Dashboard.propTypes = {
  people: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default Dashboard;
