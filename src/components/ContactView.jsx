import { useParams } from "react-router-dom"

export default function ContactView({ contacts }) {
    const _info = contacts[useParams().id]

    return (
        <div>
            <h1>{_info.firstName + " " + _info.lastName}</h1>
            <p>City: {_info.city}</p>
            <p>Street: {_info.street}</p>
            <button>Edit?</button>      
        </div>
    )
}
