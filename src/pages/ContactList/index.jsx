import PropTypes from 'prop-types'

function ContactList (props) {

    return (
        <h1>Contact list</h1>
    )
}

export default ContactList

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
  }