import { useParams } from "react-router-dom"
import ContactDetails from "./ContactDetails"

export default function ViewContact() {
  const {id} = useParams

  return(
    <>
      <h1>Contact Details</h1>
      <ContactDetails />
    </>
  )
}