import React from 'react'
import { Contact } from './Contact'

export function ContactList({contacts}) {
    

    return (
        <><section>
            <h3>Contacts</h3>
            <ul>
                {contacts.map((contact, key) => (
                    <Contact key={key} contact={contact}/>
                ))}
            </ul>
            </section>
        </>
    )
}