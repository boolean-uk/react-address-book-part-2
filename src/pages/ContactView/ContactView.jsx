import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import View from "./components/View";
import Create from "./components/Create";

function ContactView() {

  const { contacts} = useContext(AppContext)
  const { id } = useParams();
  const {pathname} = useLocation();

  const [contact, setContact]= useState({});

  const isView = pathname.includes("/contact/") ? true : false;
  const isAdd = pathname.includes("/add") ? true : false

  useEffect(() => {
    if(id) {
      const currentContact = contacts.find((contact) => contact.id === Number(id));
      setContact(currentContact);
    }    
  }, [contacts, setContact, id]);

  if (!contact) return <p>Loading...</p>

    return (
      <div>
        <h1>Contact View</h1>
        {isView && <View contact={contact}/>}
        {isAdd && <Create />}
      </div>
    );
      
  }
  
  export default ContactView;