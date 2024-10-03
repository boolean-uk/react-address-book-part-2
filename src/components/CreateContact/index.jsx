import { Link } from "react-router-dom"
import CreateContactForm from "./components/CreateContactForm"

function CreateContact() {
    return (
        <div>
            <h2>Create new contact</h2>
            <CreateContactForm />
            <Link to={"/"}>(Cancel and go back)</Link>
        </div>
    )
}

export default CreateContact
