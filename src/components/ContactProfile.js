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
  if (!props.people) return <p>Loading...</p>


  // function deleteContact() {
    // const indexOfPerson = props.people.findIndex(index => {
    //   return props.people.id === '11' // I tried specific id to see if it works but kept returning undefined
    // })

    // props.setPeople([props.people].filter(index => props.people.id !== person.id))
    // kept returning Uncaught TypeError: props.setPeople is not a function

    // console.log(indexOfPerson)
    // console.log(props.people.splice(indexOfPerson, 1))

    // navigate('/ContactList')  // I would import useNavigate
  // } 


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
          {/* <button value={person.id} onClick={deleteContact}>Delete</button> */}
    </article>
  )
}

export default ContactProfile