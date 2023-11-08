import AddContactForm from "./components/AddContactForm";

const AddNewContact = ({ setRefresh }) => {
  return (
    <div className="new-contact container">
      <h1>Create Contact</h1>
      <AddContactForm setRefresh={setRefresh} />
    </div>
  );
};

export default AddNewContact;
