import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { DataContext } from "../App"

function UpdateContact() {
    const [user, setUser] = useState(null)
    const [updatedUser, setUpdatedUser] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()
    const dataContext = useContext(DataContext)

    useEffect(() => {
        if (dataContext.users && id) {
            setUser(dataContext.users.find((user) => user.id == id));
        }
    }, [user, id])

    console.log(user)

    const handleInputChange = (event) => {
        const name = event.name
        const inputValue = event.value
        
        if(name == "firstName") {
            setUpdatedUser({...updatedUser, firstName: inputValue})
        } else if(name == "lastName") {
            setUpdatedUser({...updatedUser, lastName: inputValue})
        } else if(name == "street") {
            setUpdatedUser({...updatedUser, street: inputValue})
        } else if(name == "city") {
            setUpdatedUser({...updatedUser, city: inputValue})
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            await fetch(`https://boolean-uk-api-server.fly.dev/thomaskri0801/contact/${user.id}`, {
                method:'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUser)
            });
            dataContext.setTrigger((prev) => prev + 1);
        } catch (error) {
            console.log(error)
        }
        navigate(`/contact/${user.id}`)
    }

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label><br/>
            <input type="text" id="firstName" name="firstName" placeholder={user.firstName} onChange={(e) => handleInputChange(e.target)}/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label><br/>
            <input type="text" id="lastName" name="lastName" placeholder={user.lastName} onChange={(e) => handleInputChange(e.target)}/>
        </div>
        <div>
            <label htmlFor="street">Street:</label><br/>
            <input type="text" id="street" name="street" placeholder={user.street} onChange={(e) => handleInputChange(e.target)}/>
        </div>
        <div>
            <label htmlFor="city">City:</label><br/>
            <input type="text" id="city" name="city" placeholder={user.city} onChange={(e) => handleInputChange(e.target)}/>
        </div>
        <div>
            <button type="submit">Update</button>
        </div>
    </form>
    )

}

export default UpdateContact