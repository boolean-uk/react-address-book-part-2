export default function EditContact() {
    
  const {id} = useNavigate

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

  console.log(id, "inside addcontact")

  return(
    <div className="contactCard">
      <p>{placeholder.lastName + ", " + placeholder.firstName}</p>
      <p>{placeholder.street}</p>
      <p>{placeholder.city}</p>
    </div>
  )
}