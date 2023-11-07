function CreateContact() {

    return(
        <form>
            <label htmlFor="first-name">
                <input 
                type="text"
                id="first-name"
                name="first-name"
                value="first-name"
                required
                />
            </label>
            <label htmlFor="last-name">
                <input 
                type="text"
                id="last-name"
                name="last-name"
                value="last-name"
                required
                />
            </label>
            <label htmlFor="street">
                <input 
                type="text"
                id="street"
                name="street"
                value="street"
                required
                />
            </label>
            <label htmlFor="city">
                <input 
                type="text"
                id="city"
                name="city"
                value="city"
                required
                />
            </label>
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateContact