import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ContactDetails() {
  
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

  return (
    <div className="contactCard">
      <h2>{placeholder.lastName + ", " + placeholder.firstName}</h2>
      <p>{placeholder.street}</p>
      <p>{placeholder.city}</p>
    </div>
  )
}