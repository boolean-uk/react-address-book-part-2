import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../App"
import '../App.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ContactInformation() {
    const [person, setPerson] = useState(null)
    const { id } = useParams()

    const { contacts } = useContext(AppContext)

    // Get the person from the link
    useEffect(() => {
        const contact = contacts.find(contact => contact.id === parseInt(id))

        if(contact) {
            setPerson(contact)
        }
    }, [id, contacts])

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div>
            <h1>{person.firstName} {person.lastName}</h1>
            <p>Street: {person.street}</p>
            <p>City: {person.city}</p>
        </div>
        <div className="MapContainer">
            <MapContainer center={[person.latitude, person.longitude]} zoom={13} style={{height: "400px", width: "100%"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                <Marker position={[person.latitude, person.longitude]}>
                    <Popup>
                        {person.firstName} {person.lastName}<br />{person.street}, {person.city}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        </>
    )
}

export default ContactInformation