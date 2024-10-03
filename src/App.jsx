import './App.css';
import Menu from './components/Menu';
import ContactList from './components/ContactList';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateContact from './components/CreateContact';

function App() {
    const [people, setPeople] = useState([])

    const fetchPeople = () => {
      fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/contact").then(Response => {
        if(Response.ok){
          return Response.json()
        }
        throw Response
    
        }).then(data => {
          setPeople(data)
        }).catch(error => {
          console.error("Error fetching data: ", error)
        })
    }
    useEffect(() => {
        fetchPeople()
      }, [])

      console.log(people)
    return (
        <>
            <header>
                <Menu/>
                <Routes>
                    <Route path="/" element={<ContactList people={people}/>}/>
                    <Route path='/contact/:id' element={<Contact/>}/>
                    <Route path='/createcontact' element={<CreateContact setPeople={setPeople} people={people}/>}/>
                </Routes>
                
            </header>
        </>
    );
}

export default App;
