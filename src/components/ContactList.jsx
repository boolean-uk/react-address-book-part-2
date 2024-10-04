/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { ContactContext } from '../App';
import ContactListItem from './ContatctsListItem';

export default function ContactList() {
    const {contacts, setContacts} = useContext(ContactContext);
    
    return (
        <main className='contact-container'> 
            <h3>Contacts</h3>
            <ul>
                {contacts.map((contact, index) => (
                    <ContactListItem contact={contact} key={index}/>
                ))}
            </ul>
        </main>
    );
}                                                  