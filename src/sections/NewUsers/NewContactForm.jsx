import { Link } from 'react-router-dom'

function NewContactForm(props) {
    const {handleSubmit, createContact, handleChange} = props

    return (
        <div>
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                 <div className="form-row">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={createContact.firstName}
                        onChange={handleChange}
                    />
                </div>
                 <div className="form-row">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={createContact.lastName}
                        onChange={handleChange}
                    />
                </div>
                 <div className="form-row">
                    <label htmlFor="street">Street:</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={createContact.street}
                        onChange={handleChange}
                    />
                </div>
                 <div className="form-row">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={createContact.city}
                        onChange={handleChange}
                    />
                </div>
                <button className="button-50" type="submit">Submit</button>
            </form>
            <Link to="/contacts">Back to Contact List</Link>
        </div>
    )
}


export default NewContactForm
