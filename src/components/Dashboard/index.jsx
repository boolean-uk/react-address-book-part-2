import Contact from "../contacts"
import CreateContact from "../AddContact"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

function Dashboard() {

    return (
        <>
            <section>
                <h2>Menu</h2>
                <Link to="/contact-list">Contact List</Link>
                <Link to="/create-contact">Add new contact</Link>
            </section>
            <Routes>
                <Route 
                    path="/contact-list"
                    element={<Contact />}>
                </Route>
                <Route
                    path="/create-contact"
                    element={<CreateContact />}
                    >
                </Route>
            </Routes>
        </>
    )
}
export default Dashboard