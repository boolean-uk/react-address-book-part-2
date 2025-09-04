
import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../App.jsx'
import Contact from './Contact';
import Map from './Map.jsx';

function ContactView() {

    const { id } = useParams();
    const { data } = useContext(DataContext)
    const contact = data.find((x) => x.id === Number(id))

    if (!contact) {
        console.log(data)
        console.log(contact)
        console.log(id)
        return <p>Loading...</p>
    }

    let loc = [
        { lat: contact.latitude, lng: contact.longitude }
    ]

    // dummy value for newly created contacts
    if (!contact.latitude || contact.latitude === null) {
        loc = [ { lat: "24.3", lng: "92.1"} ]
    }
    
    return (
        <>
        <div style={{background:`${contact.favouriteColour}`, marginTop:"-22px", marginBottom:"-22px", paddingTop:"20px", paddingBottom:"50px"}}>
            <h1 className="h1-contact-view">Contact view</h1>
            <hr/>
            <div className="contact-view">
                <div className="contact-extra-details">
                    <Contact contact={contact} showDetails={true}/>
                    <Link to="/dashboard">Return to dashboard</Link>
                </div> 
                <div className="map">
                    <h2 style={{textAlign: "center"}}>Location</h2>
                    <Map locations={loc} />
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactView