import ContactList from "../contacts/components";

function ControlPanel({ theContactData }) {
  return (
    <>
      <ContactList theContactData={theContactData} />
    </>
  );
}
export default ControlPanel;
