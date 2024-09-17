import Form from "./Form/Form";

function AddContact (props) {

    const { setReloadingNecessary } = props

    console.log("inside add contact", setReloadingNecessary)
    
    return (
        <div className = "add-contact-container">
            <h2>Add a new Contact</h2>
            <Form 
            setReloadingNecessary = {setReloadingNecessary}
            // firstName = {firstName}
            // lastName = {lastName}
            // street = {street}
            // city = {city}
            />
        </div>
    )
}

export default AddContact;

