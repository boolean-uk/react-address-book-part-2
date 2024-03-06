import PropTypes from 'prop-types'

function AddContact (props) {

    return (
        <>
        <h1>Add contact</h1>
        <form >
            <input type="text" name="fname" id="fname" placeholder="forename"/>
            <input type="text" name="lname" id="name" placeholder="last name"/>
            <input type="text" name="street" id="street" placeholder="street"/>
            <input type="text" name="city" id="city" placeholder="city"/>
            <button type="submit">Add</button>
        </form>
        </>
    )
}

export default AddContact


AddContact.propTypes = {
    setContacts: PropTypes.func.isRequired,
}

