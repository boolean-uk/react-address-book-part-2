
import ContactList from "./components/ContactList"
export default function Dashboard ({contacts}) {



  return(<>

    {<ContactList contacts={contacts}/>}

  </>)


  
}
