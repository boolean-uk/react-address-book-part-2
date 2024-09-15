import ContactList from "../contacts/Index"

function Dashboard({ contactData }) {

    return (
        <>
            <ContactList contactData={contactData} />
        </>
    )
}
export default Dashboard