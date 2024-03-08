import { useNavigate } from 'react-router-dom'

function NewContactForm(props) {
    const {handleSubmit, createContact, handleChange} = props
    const navigate = useNavigate()

    const attributes = [
        "firstName", "lastName", "gender", "email", "jobTitle",
        "street", "city", "latitude", "longitude", "favouriteColour",
        "profileImage"
    ]

    return (
        <div>
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                {attributes.map((attribute, index) => (
                    <div className="form-row" key={index}>
                        <label htmlFor={attribute}>{attribute.charAt(0).toUpperCase() + attribute.slice(1)}:</label>
                        <input
                            type={attribute === "email" ? "email" : attribute === "latitude" || attribute === "longitude" ? "number" : "text"}
                            id={attribute}
                            name={attribute}
                            value={createContact[attribute]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button className="button-50" type="submit">Submit</button>
            </form>
            <button className="button-50" onClick={() => navigate(-1)}>Back to Contact List</button>
        </div>
    )
}


export default NewContactForm
