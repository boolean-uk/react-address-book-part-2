import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import SimpleMap from "./components/SimpleMap"

function ViewContact(){
    
    const { id } = useParams()
    const [contact, setContact] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/uerbzr/contact/${id}`)
        .then(res => res.json())
        .then(data => {
            setContact(data)
            setLoading(false)
        })
    },[loading])

    return (<>
    {loading ? (<div>Loading ...</div>) : (<div style={{padding: '10px', marginTop: '10px', border: `5px solid ${contact.favouriteColour}`}}>
        <Link to={`/edit/${contact.id}`}>Edit</Link>
        <h4>{contact.firstName} {contact.lastName}</h4>
        <img src={contact.profileImage} style={{height: '80px'}}/>
        <p><strong>Job title: </strong>{contact.jobTitle}</p>
        <p><strong>Email: </strong>{contact.email}</p>
        <p><strong>Address: </strong> {contact.street} {contact.city}</p>
        <p><strong>Gender: </strong> {contact.gender}</p>
        <p><strong>Current position </strong></p>
        <SimpleMap contact={contact} />
    </div>)} 
    </>
    )
}

export default ViewContact