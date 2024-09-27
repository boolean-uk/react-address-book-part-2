import ContactListItem from "./ContactListItem"
import { Link } from "react-router-dom"

function Dashboard() {
    return (<>
        <p>Dashboard</p>
        <ul>
            <Link to={"/contacts"}>
                <button>View Contacts</button>
            </Link>
            <Link to={"/contacts/create"}>
                <button>Create Contact</button>
            </Link>
        </ul>
        </>
    )
}

export default Dashboard