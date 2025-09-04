 
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DisplayContext } from '../App.jsx'

function LeftMenu(){

    const { displayForm , setDisplayForm } = useContext(DisplayContext)

    const onCreateContact = () => {
        setDisplayForm(!displayForm)
    }

    return (
        <>
        <div className="left-menu">
            <h2>Menu</h2>
            <hr/>
            <Link to="/welcome" style={{paddingBottom:"10px"}}>Home</Link>
            <button onClick={onCreateContact}>Create new contact</button>
        </div>
        </>
    )
}

export default LeftMenu