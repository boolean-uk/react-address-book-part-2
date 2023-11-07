import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ContactDetails({ data }) {

    const [displayPerson, setDisplayPerson] = useState(null)

    const { id } = useParams()
    useEffect(() => {
            if (id && data) {
                setDisplayPerson(data.find((person) => Number(person.id) === Number(id)))
            }
        }, [id, data])

    console.log(displayPerson)

    if (!displayPerson) return <p>Loading...</p>
    return (
        <>
            <h2>Hello</h2>
            <h2>{displayPerson.firstName} {displayPerson.lastName}</h2>
            <p>{displayPerson.street} {displayPerson.city}</p>
        </>
    )
}

export default ContactDetails