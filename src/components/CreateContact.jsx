import Form from "./Form/Form";

function CreateContact (props) {

    const { setReloadingNecessary } = props

    console.log("inside add contact", setReloadingNecessary)

    return (
        <div className = "add-contact-container">
            <h2>Add New Contact List</h2>
            <Form 
            setReloadingNecessary = {setReloadingNecessary}
            // firstName = {firstName}
            // lastName = {lastName}
            // gender = {gender}
            //jobtitle = {Jobtitle}
            // email = {email}
            // street = {street}
            // city = {city}
            />
        </div>
    )
}

export default CreateContact;