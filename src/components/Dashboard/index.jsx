import Contact from "../contacts"
import ContactDetails from "../contacts/componets/ContactDetails"
import { Link } from "react-router-dom"

function Dashboard({ contactData }) {

    // const data = [
    //     {
    //         "firstName": "Hallie",
    //         "lastName": "Mertz",
    //         "street": "Wilkinson Forks",
    //         "city": "Arturotown",
    //         "id": 1
    //     },
    //     {
    //         "firstName": "Josiane",
    //         "lastName": "Ernser",
    //         "street": "Brakus Island",
    //         "city": "Annamarieland",
    //         "id": 2
    //     },
    //     {
    //         "firstName": "Madonna",
    //         "lastName": "Walker",
    //         "street": "Witting Loaf",
    //         "city": "Lake Lorenza",
    //         "id": 3
    //     },
    // ]

    return (
        <>
            <Contact contactData={contactData} />
        </>
    )
}
export default Dashboard