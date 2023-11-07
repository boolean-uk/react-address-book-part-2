import ContactDetails from "./ContactDetails"

export default function ViewContact() {
    
  const {id} = useNavigate


  return(
    <>
      <h1>Contact Details</h1>
      <ContactDetails />
    </>
  )
}