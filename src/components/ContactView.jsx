import { useParams } from "react-router-dom"

export default function ContactView({ contacts, requestEditCallback, requestDeletion }) {
    const _info = contacts[useParams().id]

    return (
        <div>
            <h1>{_info.firstName + " " + _info.lastName}</h1>
            <p>City: {_info.city}</p>
            <p>Street: {_info.street}</p>
            <button onClick={() => requestEditCallback(_info)}>Edit</button>
            <button onClick={() => requestDeletion(_info.id)}>Delete</button>
        </div>
    )
}
