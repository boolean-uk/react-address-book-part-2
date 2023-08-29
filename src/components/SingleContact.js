import { useLocation } from "react-router-dom"


function SingleContact() {
    const location = useLocation()
    const { contact } = location.state

    // console.log(contact)

    return (
        <div className='menu-screen-right'>

            <h1 className='header-sections-right'>
                {contact.name}
            </h1>
            <div className="form-details">
                <p>Street: <strong> {contact.address.street}</strong></p>
                <p>City: <strong> {contact.address.city}</strong></p>

            </div>

        </div >
    )
}
export default SingleContact