import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ContactDetails({ contacts, setContacts }) {
    const [selectedContact, setSelectedContact] = useState(null)
    const params = useParams()
    const navigation = useNavigate()

    useEffect(() => {
        const person = contacts.find(c => c.id === Number(params.id))
        setSelectedContact(person)
    }, [params.id, contacts])

    function handleClick() {
        async function removeContact() {
            const options ={
                method: 'DELETE',
                body: JSON.stringify(selectedContact),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-uk-api-server.fly.dev/MyrtheDullaart/contact/${params.id}`, options)
            const data = await response.json()
            console.log(data)

            setContacts([
                ...contacts.filter((contact) => contact.id !== data.id)
            ])
        }

        removeContact()
        navigation('/contacts')
    }

    return (
        <div>
            { selectedContact && 
                <>
                    <h2>{`${selectedContact.firstName} ${selectedContact.lastName}`}</h2>
                    <p>{`${selectedContact.street} ${selectedContact.city}`}</p>
                    <button onClick={handleClick}>Delete</button>
                </>
            }
        </div>
    )
}