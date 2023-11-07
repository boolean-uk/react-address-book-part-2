import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ContactDetails({ contactData }) {

    const [displayPerson, setDisplayPerson] = useState(null)

    const { id } = useParams()
    useEffect(() => {
            if (id && contactData) {
                setDisplayPerson(contactData.find((person) => Number(person.id) === Number(id)))
            }
        }, [id, contactData])

    console.log(displayPerson)

    if (!displayPerson) return <p>Loading...</p>
    return (
        <section>
            <h2>{displayPerson.firstName} {displayPerson.lastName}</h2>
            <p>{displayPerson.street} {displayPerson.city}</p>
        </section>
    )
}

export default ContactDetails