import { useState } from "react"
import { useNavigate } from "react-router-dom"
function CreateContact(props){
    const Navigate = useNavigate()
    const { setPeople } = props
    const { people } = props
    const submitionBody = {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        gender: "",
        email: "",
        jobTitle: "",
        latitude: 0,
        longitude: 0,
        favouriteColour: "",
        profileImage: "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
      }
    const [submition, setSubmition] = useState(submitionBody)

    const postContact = () => {
        fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/contact",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
                body: JSON.stringify(submition),
            },
        ).then(Response => {
            if(Response.ok){
              return Response.json()
            }
            throw Response
        
            }).catch(error => {
              console.error("Error fetching data: ", error)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(submition)
        postContact()
        setPeople([...people, submition])
        setSubmition(submitionBody)
        Navigate('/')
    }

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="Contact">FirstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={e => setSubmition({...submition, firstName: e.target.value})}
          value={submition.firstName}
        />
        <label htmlFor="Contact">LastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={e => setSubmition({...submition, lastName: e.target.value})}
          value={submition.lastName}
        />
        <label htmlFor="Contact">Street</label>
        <input
          type="text"
          id="steet"
          name="street"
          onChange={e => setSubmition({...submition, street: e.target.value})}
          value={submition.street}
        />
        <label htmlFor="Contact">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={e => setSubmition({...submition, city: e.target.value})}
          value={submition.city}
        />
        <button type="submit">Create Contact</button>
      </form>
    )
}
export default CreateContact