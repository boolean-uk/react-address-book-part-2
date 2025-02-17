/*
1) GET request - all: A user can view a dashboard that displays a list of contacts
Each contact in the list should be displayed as their first and last names

2) GET request - one: A user can click a contact's name to view more details about that contact
The view should contain the contact's first and last name, as well as the contact's street and city

3) POST request: A user can create a contact via a form, accessed by clicking a "Create a contact" menu link
The form should create a contact with a first and last name, as well as a street and city
When submitted, the contact data should be sent to an API that saves it

The user should then be automatically navigated back to the contact list
*/

import { useEffect, useState, createContext } from 'react'
import './App.css';
import NavigationBar from './NavigationBar';


const MyContext = createContext()

function App() {
    const [people, setPeople] = useState([])
    
    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/Magnus-droid/contact")
          .then(res => res.json())
          .then(people => setPeople(people))
      }, [])
      
    console.log(people)  
  
    return (
        <MyContext.Provider value={{people: people}}>
            <div className="App">
                <NavigationBar/>
            </div>
        </MyContext.Provider>
    )
  }

  export { App, MyContext };
