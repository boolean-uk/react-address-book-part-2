import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LeftMenu from "../leftMenu/LeftMenu";
import "./ContactView.css"

function ContactView () {
    const { id } = useParams();
    const [contact, setContact] = useState({})

    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${id}`)
        .then(response => response.json())
        .then(data => setContact(data))
    }, [id])

    const handleDelete = () => {
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate('/'))
    }


    return(
        <div className="contactViewContainer">
          <LeftMenu />
          <div className="contactView">
              <p><img /></p>
              <p><b>Name:</b> {contact.firstName} {contact.lastName}</p>
              <p><b>Street:</b> {contact.street}</p>
              <p><b>City:</b> {contact.city}</p>
              <p><b>Gender:</b> {contact.gender}</p>
              <p><b>Email:</b> {contact.email}</p>
              <p><b>Job Title:</b> {contact.jobTitle}</p>
              <p><b>Latitude:</b> {contact.latitude} <b>Longitude:</b> {contact.longitude}</p>
              <p><b>Favorite Color: </b> {contact.favouriteColour}</p>


              <button className="updateButton" onClick={() => navigate(`/update/${id}`)}>Update</button>
              <button className="deleteButton" onClick={handleDelete}>Delete</button>
          </div>
          <p>
            <b>Location: </b>
          </p>
          <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
        </div>
    )
}

export default ContactView