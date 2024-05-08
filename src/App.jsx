import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import CreateContact from './components/CreateContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import EditContact from './components/EditContact'


function App() {

    return (
       <div className='h-screen container grid grid-cols-[200px_1fr] max-w-full'>
        <Nav />
        <main className='p-5 bg-outrun-violet'>
        <Routes>
        <Route path='/'/>
        <Route path='/add-new-contact' element={<CreateContact />} />
        <Route path='/contact-list' element={<ContactList />} />
        <Route path='/contact-list/:id' element={<ContactDetail />} />
        <Route path='/contact-list/edit/:id' element={<EditContact />} />
        </Routes>
        </main>
       </div>
    );
}

export default App;
