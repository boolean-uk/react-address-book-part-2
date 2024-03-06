import ContactsList from './components/ContactsList'

function Dashboard(props) {
    console.log("Inside Dashboard: ", { props });

    const { contacts } = props


    return (
        <main className="dashboard-layout">
            <section>
                <h2>Contacts</h2>
                {contacts ? <ContactsList contacts={contacts} /> : <p>Loading... Dashboard</p>}
            </section>
        </main>
    )
}

export default Dashboard