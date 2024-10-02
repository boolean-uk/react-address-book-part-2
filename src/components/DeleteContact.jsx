import { useContext } from "react"
import { AppContext } from "../App"
import '../App.css'
import { useNavigate } from "react-router-dom"

function DeleteContact({ onAction }) {
    const { contacts } = useContext(AppContext)
    const navigation = useNavigate()


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Yumikitsu/contact/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                onAction()
                navigation('/')
            } else {
                console.error("Failed to delete Contact")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }


    return (
        <>
        <div className="ContactList">
            <h1>Contacts</h1>
            {contacts.map((contact) => 
                <div key={contact.id} className="Person">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <div className="DeleteButton">
                        <button className="Delete" onClick={() => handleDelete(contact.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default DeleteContact