import React, { useEffect } from 'react';
import ContactList from './ContactList';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(props) {

  const navigate = useNavigate();
  console.log(props)

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/giarreh/contact')
    .then(response => response.json())
    .then(data => props.setContacts(data));
  }, []);

  return (
    <div style={styles.dashboardContainer}>
      <div 
      style={styles.dashboard_1}>
        <div style={styles.dashboardTitle}>
        <h2>Menu</h2>
        </div>
        <div>
          <div style={styles.button} onClick={() => navigate("/create")}>Create a new contact</div>
          <div style={styles.button} onClick={() => navigate("/")}>View contacts</div>
        </div>
      </div>
      <div 
      style={styles.dashboard_2}>
        <div style={styles.dashboardTitle}>
        <h2>Contacts</h2>
        </div>
        <ContactList contacts={props.contacts} />
        </div>
    </div>
  );
}

// Inline styles
const styles = {
  dashboardContainer: {
    display: 'flex',
    width: '100%',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    borderRadius: 5,
  },
  dashboard_1: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  dashboard_2: {
    flex: 2,
    backgroundColor: 'lightgreen',
  },
  dashboardTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Applying styles
Object.freeze(styles); // Prevent accidental modification
