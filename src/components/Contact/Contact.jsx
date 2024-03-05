import ContactList from "./ContactList"

export default function Contact(props){
    const { contacts } = props
         
    return(
        <ContactList contacts = {contacts}/>

    )
}