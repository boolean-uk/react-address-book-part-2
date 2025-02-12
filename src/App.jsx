import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactsListPage from './components/ContactsListPage';
import ViewContactPage from './components/ViewContactPage';
import CreateContactPage from './components/CreateContactPage';
import EditContactPage from './components/EditContactPage';
import { createContext, useEffect, useState } from 'react';
const AppContext = createContext()

function App() {
  const [contacts, setContacts] = useState(null)
  const [toggleFetchDep, setToggleFetchDep] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  // TODO: Consider moving this into ContactsListPage
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/pudkipz/contact')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setContacts([...data])
  })
  }, [toggleFetchDep])

  const toggleFetch = () => {
    setContacts(null)
    setToggleFetchDep(!toggleFetchDep)
  }

  const handleReset = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/pudkipz/contact`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
    })
      .then(() => toggleFetch())
  }

  // {console.log(contacts)}
  return (
    <main className='contacts-layout'>
      <AppContext.Provider value={{contacts, setContacts, toggleFetch, searchValue}}>
      <nav className='menu'>
        <h2>Menu</h2>
        <ul>
          <li><Link to='/'>Contacts</Link></li>
          <li><Link to='/create'>New Contact</Link></li>
          <li><Link onClick={handleReset}>Reset contacts list</Link></li>
          <li><input
            onChange={e => setSearchValue(e.target.value)}
            placeholder='Search contacts...'/></li>
        </ul>
      </nav>
        <Routes>
          <Route
            path='/'
            element={<ContactsListPage />}
          />
          <Route
            path='/contact/:id'
            element={<ViewContactPage />}
          />
          <Route
            path='/create'
            element={<CreateContactPage />}
          />
          <Route
            path='/contact/:id/edit'
            element={<EditContactPage />}
          />
        </Routes>
      </AppContext.Provider>
    </main>
  )
}

export { App, AppContext };
