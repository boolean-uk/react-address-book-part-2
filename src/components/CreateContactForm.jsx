export default function CreateContactForm() {
    return (
        <form className="create-contact-form">
            <h2>Create Contact</h2>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" name="first-name" id="first-name" />

            <label htmlFor="last-name">Last Name: </label>
            <input type="text" name="last-name" id="last-name" />

            <label htmlFor="street">Street: </label>
            <input type="text" name="street" id="street" />

            <label htmlFor="city">City :</label>
            <input type="text" name="city" id="city" />

            <button className="create-button">Create</button>
        </form>
    )
}