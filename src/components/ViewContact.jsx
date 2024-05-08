import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import bin from '../../_assets/Icons/bin.svg'

export default function ViewContact({contact, setContact, allContacts, setAllContacts}) {
    const urlParams = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/contact/${urlParams.id}`)
            .then(response => response.json())
            .then(response => setContact(response))
    }, [urlParams, setContact])

    const removeUser = () => {

        fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/contact/${urlParams.id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(response => {setAllContacts(allContacts.filter((item) => {if(item.id !== response.id) return item}))})
    
        navigate('/contact-list')
    }

    return (
        <section className="contact-details">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <img src={bin} className="icon" id="bin" onClick={removeUser}/>
            <p>{contact.street}, {contact.city}</p>
        </section>
    )
}