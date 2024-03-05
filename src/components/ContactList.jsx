import React from 'react'
import ContactListItem from './ContactListItem'

export default function ContactList(props) {

  const { contacts } = props;

  

  return (
    <ul style={styles.container}>
      {contacts.map((contact, index) => (
        <ContactListItem key={contacts.id} contact={contact} index={index}/>
      ))}
    </ul>
  )
}

const styles = {
  container: {
    padding: 10
  },
}
