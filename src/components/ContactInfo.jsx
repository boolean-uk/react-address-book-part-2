import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { DataContext } from "../App"

function ContactInfo() {
    const [user, setUser] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const dataContext = useContext(DataContext)

    useEffect(() => {
        if (dataContext.users && id) {
            setUser(dataContext.users.find((user) => user.id == id));
        }
    }, [user, id])

    const handleDeleteUser = async(deleteUser) => {
        console.log(deleteUser)
        try {
            await fetch(`https://boolean-uk-api-server.fly.dev/thomaskri0801/contact/${deleteUser.id}`, {
                method: 'DELETE'
            })
            dataContext.setTrigger((prev) => prev + 1);
        } catch(error) {
            console.log(error)
        }
        navigate("/")
    }

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div>
                <h1>{user.firstName} {user.lastName}</h1>
                <p>{user.street}, {user.city}</p>
            </div>
            <div>
                <button onClick={() => handleDeleteUser(user)}>Delete</button>
                <button><Link to={`/updatecontact/${user.id}`}>Update</Link></button>
            </div>
        </div>
    )

}

export default ContactInfo