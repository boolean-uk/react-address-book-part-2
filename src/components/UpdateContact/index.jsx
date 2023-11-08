import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdateContact({ URL, setShouldGetData, contactData }) {

    const [updatePerson, setUpdatePerson] = useState(null)

    const navigate = useNavigate()

    const [updateFirstName, setUpdateFirstName] = useState('')
    const [updateLastName, setUpdateLastName] = useState('')
    const [updateStreet, setUpdateStreet] = useState('')
    const [updateCity, setUpdateCity] = useState('')

    const updateContactDetails = {
        firstName: updateFirstName,
        lastName: updateLastName,
        street: updateStreet,
        city: updateCity
    }

    const { id } = useParams()

    useEffect(() => {
            if (id && contactData) {
                setUpdatePerson(contactData.find((person) => Number(person.id) === Number(id)))
            }
        }, [id, contactData])


        function updateContact() {
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateContactDetails)
            }

            fetch(`${URL}/${updatePerson.id}`, options)
            .then(res => res.json())
            .then(() => setShouldGetData(true))
        }

       function handleUpdate(e) {
            e.preventDefault()
            updateContact()
            navigate(-1)
        }

    return (
        <section>
            <h2>Update Contact</h2>
            <p>All fields required to update</p>
            <form className="update-contact-form" onSubmit={handleUpdate}>
                <label htmlFor="first-name">
                    First Name:
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        placeholder="Enter First Name"
                        onChange={e => setUpdateFirstName(e.target.value)}
                        value={updateFirstName}
                        required
                    />
                </label>
                <label htmlFor="last-name">
                    Last name:
                    <input 
                        type="text"
                        id="last-name"
                        name="last-name"
                        placeholder="Enter Last Name"
                        onChange={e => setUpdateLastName(e.target.value)}
                        value={updateLastName}
                        required
                    />
                </label>
                <label htmlFor="street">
                    Street:
                    <input 
                        type="text"
                        id="street"
                        name="street"
                        placeholder="Enter Street Name"
                        onChange={e => setUpdateStreet(e.target.value)}
                        value={updateStreet}
                        required
                    />
                </label>
                <label htmlFor="city">
                    City:
                    <input 
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter City"
                        onChange={e => setUpdateCity(e.target.value)}
                        value={updateCity}
                        required
                    />
                </label>
                <button type="submit">Update</button>
            </form>
        </section>
    )
}

export default UpdateContact