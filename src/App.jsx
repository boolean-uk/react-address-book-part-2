import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CreateContact from './components/Form';
import ContactList from './components/ContactList';
import { useState } from 'react';
import ContactListItem from './components/ContactListItem';
import EditForm from './components/Editform';


function App() {
    const [contactData, setcontactData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getContactData = () => {

        fetch('https://boolean-api-server.fly.dev/Usamaibrahim33/contact') 
          .then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                console.log('they is error somewhere!')
            }
          })

          .then((data) =>  {
            setcontactData(data) 
            console.log(data)

            setisLoading(false)
        })
    }


    return (
        <>
             <header>
                <h1> Hello Students </h1>
                <ul>
                    <li> 
                        <Link to='/createform'>Add New Contact</Link>
                    </li>

                    <li> 
                        <Link to='/contactlist'> Contact Details </Link>
                    </li>
                    {/* <li>
                      <Link to='/editForm'> Edit Form</Link>
                    </li> */}
                </ul>
             </header>

             <Routes>
                <Route 
                  path='/createform' 
                  element={<CreateContact/>}
                />

                <Route 
                  path='/contactlist' 
                  element={<ContactList getContactData={getContactData} contactData={contactData} setcontactData={setcontactData} isLoading={isLoading} setisLoading={setisLoading}/>}
                />

                <Route 
                  path='/contactlist/:id' element={<ContactListItem getContactData={getContactData} />}/>

                <Route 
                  path='/editForm' element={<EditForm />}/> 
            </Routes>

        </>
    );
}

export default App;
