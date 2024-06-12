import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PropTypes from "prop-types";

function DeleteContact(props) {
  const { contacts, update } = props
  const { id } = useParams()
  const [person, setPerson] = useState(contacts.find((p) => p.id == id))
  const navigate = useNavigate()

  useEffect(() => {
    if(!person) return <p>Person was not found...</p>

    const deleteRequest = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    }

    fetch("https://boolean-api-server.fly.dev/henrikrosenkilde/contact/" + person.id, deleteRequest)
    update()
    navigate("/")
  }, [])

  return (
    <div >

    </div>
  )
}

DeleteContact.propTypes = {
    contacts: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired
}

export default DeleteContact