import './App.css';
import { useState, useEffect } from 'react'


function App() {

    const [ contactList, setContactList ] = useState([])

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/homonoviscoding/contact`)
            .then(response => response.json())
            .then(setContactList)
        }, [])
        console.log(contactList)

    return (
        <body>
            <aside className='sidebar'>
                <h1 className='side-header'>
                    Menu
                </h1>
                <menu>Contact List</menu>
                <menu>Add New Contact</menu>
            </aside>        
    
            <main>
                <header>
                    <h1 className='main-header'>Contacts</h1>
                </header>
                <ul className='list-contacts'>
                  {contactList.map(contact =>
                    <>
                        <li> { contact.firstName } {contact.lastName} <button>View</button></li>
                    </>
                    )
                  }  
                </ul>
            </main>
        </body>
    );
}

export default App;
