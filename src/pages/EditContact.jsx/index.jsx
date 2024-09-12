import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ContactForm from "../ContactForm"

function EditContact(){
    const { id } = useParams()
    const [contact, setContact] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        console.log("Fetching contact data...");
        fetch(`https://boolean-api-server.fly.dev/uerbzr/contact/${id}`)
            .then(res => res.json())
            .then(c => {
                setContact(c);
                setIsLoading(false);
            })
    }, [id]);
    

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(contact)
        const reqOptions = {
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(contact)
        }
        fetch(`https://boolean-api-server.fly.dev/uerbzr/contact/${id}`, reqOptions)
        navigate(`/view/${id}`)
    }


    return (
    <div style={{padding: '10px', marginTop: '10px'}}>
        {!isLoading ? <ContactForm contact={contact} handleChange={handleChange} handleSubmit={handleSubmit} /> : <p>Loading ...</p>}
    </div>
    )
}

export default EditContact