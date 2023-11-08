import ContactList from "../contacts"

function Dashboard({ contactData }) {

    return (
        <>
            <ContactList contactData={contactData} />
        </>
    )
}
export default Dashboard