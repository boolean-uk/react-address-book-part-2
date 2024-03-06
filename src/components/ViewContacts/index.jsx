import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function ViewContacts({contacts, setContacts}){
    const [person, setPerson] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(contacts && id){
            setPerson(contacts.find((contact) => 
            parseInt(contact.id) === parseInt(id)))
            console.log(person)
        }
    }, [])

    function handleDelete(){
        fetch("https://boolean-api-server.fly.dev/ThomasKva/contact", {
            method: "DELETE"      
        }).then(response => {
            if(response.ok){
                setContacts(contacts.filter((contact) => 
                contact.id === id))
            } 
        }).catch((error) => {console.error("Could not delete"), error})
        .then(() => navigate("/"))
    }

    if(!person) return <p>Loading...</p>

    return(
        <article className="article">
            <h2>{person.firstName} {person.lastName}</h2>
            <ul>
                <div>
                    <label>Street: </label><span>{person.street}</span>
                </div>
                <div>
                    <label>City: </label><span>{person.city}</span>
                </div> 
                <div>
                    <button onClick={handleDelete}> Delete contact</button>
                </div>
            </ul>  
        </article>
    )
}

export default ViewContacts