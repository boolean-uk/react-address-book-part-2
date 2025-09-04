import { useParams } from "react-router-dom"

export default function ContactProfile(props) {
    const{contacts} = props
    const {id} = useParams()
    const contact = contacts.find((x) => x.id == id)

    if(!contact) return <p>Loading...</p>
    return (<>
    <article>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.street} , {contact.city} </p>
    </article>
    </>)
}