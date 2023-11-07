import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ContactDetails() {
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id, "inside ContactDetails")

  const placeholder = {
    "firstName": "Harmony",
    "lastName": "Davis",
    "gender": "Transexual woman",
    "email": "Talon_Johns37@yahoo.com",
    "jobTitle": "District Usability Designer",
    "street": "Bert Garden",
    "city": "Lake Jennie",
    "latitude": 59.8096,
    "longitude": 35.5257,
    "id": 2
  }

  const [contact, setContact] = useState(null)

  const loadContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`

    fetch(baseURL + endpoint)
      .then(response => response.json())
      .then(data => setContact(data))
  }

  // useEffect(loadContact, [])

  return (
    <div className="contactCard">
      <p>{placeholder.lastName + ", " + placeholder.firstName}</p>
      <p>{placeholder.street}</p>
      <p>{placeholder.city}</p>
    </div>
  )
}