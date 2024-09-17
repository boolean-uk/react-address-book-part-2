
import { useState, useEffect} from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

function ContactListItem(props) {
    const [contact, setContact] = useState([])

    const { getcontactData } = props

    const location = useLocation()
    const navigate = useNavigate()


    const params = useParams()
    console.log(params)
    
    const deleteUser = () => {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
        }

        fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/contact/${params.id}`, options)
          .then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                console.log('they was an error getting the response!')
            }
          })
          .then((data) => console.log(data))
          .catch((error) => console.log('this is the error i encountered!', error))
          goback()
          getcontactData()
    }


    const editFormFunction = () => {
        console.log('clicked')
        navigate('/editForm', { state: contact})
    }

    useEffect(() => {
        if(location.state) {
            setContact(location.state)
        }
    }, [location])


    const goback = () => {
        navigate(-1)
    }

    const newContact = () => {
        navigate('/createform')
    }

    if(!contact) {
        return <p> loading....</p>
    }

    return (
        < >

        <div className="details">
           <h2>{contact.firstName} {contact.lastName}</h2>
           <p>Street: {contact.street}</p>
           <p>City: {contact.city}</p>

           <button onClick={goback}> Back </button>
           <button onClick={newContact}> Add contact? </button>
           <button onClick={deleteUser}>Delete User</button>
           <button className="edit" onClick={editFormFunction}> edit</button>
        </div>
        
        </>
        
    )
}

export default ContactListItem