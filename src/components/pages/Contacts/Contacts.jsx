import { usePeople } from "../../../context/PeopleProvider";
import ContactItems from "./ContactItems";
import '../CSS/Contacts.css'

function Contacts() {
    const { people, setPeople } = usePeople();

    
    // Passing deleteContact as a props to the child element. The child element triggers it. Sends back and id. This comp, well this function, then filters the setPeople without said ID.
    const deleteContact = (id) => {
      setPeople(people.filter(person => person.id !== id));
    }
      
    return (
      <ul>
        {people.map((person) => (
          <ContactItems 
          key={person.id} 
          person={person} 
          deleteContact={deleteContact} />
        ))}
      </ul>
    )
  }
  
  export default Contacts