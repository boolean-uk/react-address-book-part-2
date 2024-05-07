
import '/src/style/Navigation.css'
import ContactsList from "./ContactsList";
import CreateNewContact from './CreateNewConcact';
export default function Navigation(){
  return (
    <ul className="navigation">
      <h2>Menu</h2>
      <ContactsList />
      <CreateNewContact/>
    </ul>
  )
}