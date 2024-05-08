
import ContactDetails from "./ContactDetails";
import ContactsList from "./ContactsList";
import NewContactForm from "./NewContactForm";

export default function MainContent({contacts}){

  return (
    <main>
      {/* <NewContactForm/> */}
      <ContactsList contacts = {contacts}/>
      {/* <ContactDetails/> */}
    </main>
  )
}