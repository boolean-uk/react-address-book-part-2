import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

function ContactDetails({ contactData, URL, setShouldGetData }) {

    const [displayPerson, setDisplayPerson] = useState(null)

    const navigate = useNavigate()

    const { id } = useParams()
    useEffect(() => {
            if (id && contactData) {
                setDisplayPerson(contactData.find((person) => Number(person.id) === Number(id)))
            }
        }, [id, contactData])


        function handleDelete(displayPerson) {
            const options = {
                method: 'DELETE'
            }
            fetch(`${URL}/${displayPerson.id}`, options)
            .then(res => res.json())
            .then(() => setShouldGetData(true))
            navigate("/")
        }

    if (!displayPerson) return <p>Loading...</p>
    return (
        <section>
            <h2>Contact Information</h2>
            <h3>{displayPerson.firstName} {displayPerson.lastName}</h3>
            <p>{displayPerson.street} {displayPerson.city}</p>
            <Link to={`/update-contact/${displayPerson.id}`}>Update Details</Link>
            <button onClick={() => handleDelete(displayPerson)}>Delete Contact</button>
        </section>
    )
}

export default ContactDetails