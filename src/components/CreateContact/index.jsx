function CreateContact(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <h1>Create Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name-input">First name</label> 
                <input id="first-name-input" type="text" placeholder="Jane"/>
                <label htmlFor="last-name-input">Last name</label>
                <input id="last-name-input" type="text" placeholder="Doe"/>
                <label htmlFor="street-input">Street</label>
                <input id="street-input" type="text" placeholder="123 Fake St"/>
                <label htmlFor="city-input">City</label>
                <input id="city-input" type="text" placeholder="City McCityface" />
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateContact