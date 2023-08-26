import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function ContactProfile(props) {
  const [person, setPerson] = useState(null)
  
  const location = useLocation()

  console.log(location)

  useEffect(() => {
    setPerson(location.state)
  },[])
  

  // this can be used to counter undefined error
  if (!person) return <p>Loading...</p>

  return (
    <article>
        <h2>Contact Profile</h2>
          <h4>First and Last Name  :
            {person.name}
          </h4>
          {person.id < 11 &&
          <h4>Street  :
            {person.address.street}
          </h4>
          }
          {person.id > 10 &&
          <h4>Street  :
            {person.street}
          </h4>
          }
    </article>
  )
}

export default ContactProfile