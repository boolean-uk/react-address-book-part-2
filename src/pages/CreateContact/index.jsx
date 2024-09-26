import ContactDetails from '../ViewContact';
import ContactForm from './components/ContactForm';

export default function CreateContact(props) {
    const {setContacts} = props
    return (
        <>
        <ContactForm setContacts={setContacts}/>
        </>
    )
}
