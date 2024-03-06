import PropTypes from 'prop-types'

function EditContact (props) {

    return (
        <h1>Add contact</h1>
    )
}

export default EditContact


EditContact.propTypes = {
    setContacts: PropTypes.func.isRequired,
}