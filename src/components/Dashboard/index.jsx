import Contact from "../contacts"
import CreateContact from "../AddContact"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ContactDetails from "../contacts/componets/ContactDetails"

function Dashboard() {

    const data = [
        {
            "firstName": "Hallie",
            "lastName": "Mertz",
            "street": "Wilkinson Forks",
            "city": "Arturotown",
            "id": 1
        },
        {
            "firstName": "Josiane",
            "lastName": "Ernser",
            "street": "Brakus Island",
            "city": "Annamarieland",
            "id": 2
        },
        {
            "firstName": "Madonna",
            "lastName": "Walker",
            "street": "Witting Loaf",
            "city": "Lake Lorenza",
            "id": 3
        },
    ]

    return (
        <>
            <section className="dashboard">
                <h2>Menu</h2>
                <Link to="/contact-list">Contact List</Link>
                <br />
                <Link to="/create-contact">Add new contact</Link>
            </section>
            <Routes>
                <Route 
                    path="/contact-list"
                    element={<Contact data={data} />}>
                </Route>
                <Route
                    path="/create-contact"
                    element={<CreateContact />}
                    >
                </Route>
                <Route
                    path="/contact-list/contact-details/:id"
                    element={<ContactDetails data={data} /> }
                >
                </Route>
            </Routes>
        </>
    )
}
export default Dashboard