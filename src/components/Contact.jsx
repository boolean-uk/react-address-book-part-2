import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


function Contact(){
    const { id } = useParams()
    const [person, setPerson] = useState({})
    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/contact/"+id.toString()).then(Response => {
        if(Response.ok){
          return Response.json()
        }
        throw Response
    
        }).then(data => {
          setPerson(data)
        }).catch(error => {
          console.error("Error fetching data: ", error)
        })
      }, [id])
    return(
        <div className="contact">
            <h1>{person.firstName} {person.lastName}</h1>
            <p>{`Street: ${person.street}, City: ${person.city}`}</p>
        </div>
    )
}

export default Contact