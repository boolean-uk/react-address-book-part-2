function Form () {
    return (
        <div className = "form-container">
            <form>
                <label htmlFor = "First Name">First Name:
                    <input type = "text" placeholder = "First Name" />
                </label>
                <label htmlFor = "Last Name">Last Name:
                    <input type = "text" placeholder = "Last Name" />
                </label>
                <label htmlFor = "Street">Street:
                    <input type = "text" placeholder = "Email" />
                </label>
                <label htmlFor = "City">City:
                    <input type = "text" placeholder = "City" />
                </label>
                <button type = "submit">Add Contact</button>
            </form>
        </div>
    )
}