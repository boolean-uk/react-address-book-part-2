import Contact from "./Contact";

const ContactsList = ({ data }) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul className="contacts-list">
                {data.length === 0 ? (
                    <p>loading...</p>
                ) : (
                    data.map((contact, i) => <Contact key={i} data={contact} />)
                )}
            </ul>
        </>
    );
};

export default ContactsList;