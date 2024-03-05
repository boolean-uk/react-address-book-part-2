import ContactList from './ContactList'

function ContactPage(props) {

    const { contacts } = props;
    
      return (
        <main className="dashboard-layout">
            <section>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
        
      </section>
        </main>
      )
}

export default ContactPage