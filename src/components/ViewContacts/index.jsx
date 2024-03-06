import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewContacts({contacts}){
    const [person, setPerson] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        if(contacts && id){
            setPerson(contacts.find((contact) => 
            parseInt(contact.id) === parseInt(id)))
            console.log(person)
        }
    }, [])

    if(!person) return <p>Loading...</p>

    return(
        <article>
            <h2>{person.firstName} {person.lastName}</h2>
            <ul>
                <div>
                    <label>Street: </label><span>{person.street}</span>
                </div>
                <div>
                    <label>City: </label><span>{person.city}</span>
                </div> 
            </ul>  
        </article>
    )
}

export default ViewContacts