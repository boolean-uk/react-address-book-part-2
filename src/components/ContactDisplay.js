import { useLocation } from "react-router-dom"

function ContactDisplay() {
    const location = useLocation()
    const { contact } = location.state

    return (
        <div className='menuRight'>
            <h1 className='headerRight'>
                {contact.name}
            </h1>
            <div>
                <p>Street: <strong> {contact.address.street}</strong></p>
                <p>City: <strong> {contact.address.city}</strong></p>
            </div>
        </div >
    )
}
export default ContactDisplay