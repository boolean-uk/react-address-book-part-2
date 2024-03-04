import ContactList from "./Components/contactList/ContactList";
import PropTypes from 'prop-types'

Dashboard.propTypes = {
    contacts: PropTypes.array,
  }

 

// function Fetcher() {
//     return fetch(url)
//     .then(res => {
//         if (!res.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return res.json();
//       });
// }

export default function Dashboard(props) {
    const { contacts } = props

    // //Calling random contacts API:
    // useEffect(() => {
    // Fetcher()
    // .then(data => setContact(data))
    // .catch(error => console.error('Error fetching data:', error));
    // }, []);
  
    
  return (
    <main className='dashboard'>
        <header className="dashboard-head">Dashboard</header>
        <section className="xxx">
            {contacts && contacts.length > 0 &&<ContactList contacts={contacts}/>}
        </section>
    </main>
  )
}
