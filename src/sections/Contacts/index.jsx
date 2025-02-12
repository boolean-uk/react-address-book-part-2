import { useContext } from "react";
import { MyContext } from "../../App";
import ContactList from "./components/ContactList";


function ContactsSection(){
    const { contacts, setContacts } = useContext(MyContext)

    return(
        <>
            <h3>Contacts</h3>
            <MyContext.Provider value={{contacts, setContacts}}>
                <ContactList/>
            </MyContext.Provider>
        </>
    );
}

export default ContactsSection