import ContactsList from './components/ContactsList.jsx'

function Dashboard(props) {
    const { contacts } = props

    return (
        <section>
            <h3>Contacts</h3>
            <ContactsList contacts={contacts} />
        </section>
    )
}

export default Dashboard
