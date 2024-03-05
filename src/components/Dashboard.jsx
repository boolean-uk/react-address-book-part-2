import ContactListItem from "./ContactListItem"

function Dashboard({contactData}) {
    return (<>
        <p>Dashboard</p>
        <ul>
            {contactData ? contactData.map((contact, i) =>
            <ContactListItem index={i} contact={contact}/>) 
            : "Loading..."}
        </ul>
        </>
    )
}

export default Dashboard