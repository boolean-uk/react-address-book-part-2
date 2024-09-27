import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ContactListItem(props) {
  console.log("CONTACT LIST ITEM:", props);
  const { contact } = props;


  return (
    <li style={styles.container}>
      <div style={styles.item1}>
        <p style={styles.name}>{contact.firstName} {contact.lastName}</p>
      </div>
      <div style={styles.item2}>
        <Link to = {`/contact/${contact.id}`}>View Details</Link>
      </div>
    </li>
  )
} 

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid black',
    paddingLeft: 10,
    paddingRight: 10,
  },

  name: {
    fontSize: 20,
  },
}
