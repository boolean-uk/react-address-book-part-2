import { Link } from "react-router-dom"
import UpdateContactForm from "./components/UpdateContactForm"

function UpdateContact() {
    return (
        <div>
            <UpdateContactForm />
            <Link to={"/"}>Go back</Link>
        </div>
    )
}

export default UpdateContact