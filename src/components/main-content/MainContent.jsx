
import ContactsList from "./ContactsList";

export default function MainContent({contacts}){

  return (
    <main>
      <ContactsList contacts = {contacts}/>
    </main>
  )
}