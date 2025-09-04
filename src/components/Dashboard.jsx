
import { DisplayContext } from '../App.jsx' 
import { useContext } from 'react'
import LeftMenu from './LeftMenu.jsx'
import ContactList from './ContactList'
import ContactForm from './ContactForm.jsx'

function Dashboard() {

    const { displayForm } = useContext(DisplayContext)

    return (
        <>
        <div className="dashboard">
            <LeftMenu />
            {displayForm ? <ContactForm/> : <ContactList/>}
        </div>
        </>
    )
}

export default Dashboard