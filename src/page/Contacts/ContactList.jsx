import PropTypes from "prop-types"
import ContactDisplay from "./ContactDisplay"

function ContactList({contacts}) {
  return (
    <section className='section-scrollable'>
      {contacts.map((person, index) => (
        <ContactDisplay key={index} info={person} id={index} />
      ))}
    </section>
  )
}

ContactList.propTypes = { 
	contacts: PropTypes.array.isRequired, 
}


export default ContactList