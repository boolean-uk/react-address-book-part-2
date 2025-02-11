import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom"
import {AppContext} from "../../App"

function ContactList() {
    const {contacts, deleteContact} = useContext(AppContext)
    const [searchWord, setSearchWord] = useState("");
    let filteredContacts = contacts;
    const searchFunc = (searchStr) => {
        setSearchWord(searchStr);        
    }
    filteredContacts = contacts.filter((x) => 
        x.firstName.toLowerCase().includes(searchWord.toLowerCase())
        || x.lastName.toLowerCase().includes(searchWord.toLowerCase())
    )
    return (
        <>
            <input type="text" placeholder='Search' onChange={(e) => searchFunc(e.currentTarget.value)}/>
            <ul>
                {filteredContacts.map((x, index) => (
                    <li key={index}>
                        <button style={{fontSize:"13px",marginRight:"5px", backgroundColor:"whitesmoke", border:"black 1px solid", borderRadius:"5px", padding:"1.5px", paddingTop:"1.5px"}} onClick={() => deleteContact(x.id)}>Delete</button>
                        <Link to={`contact/${x.id}/edit`}
                            style={{fontSize:"13px", marginRight:"5px", backgroundColor:"whitesmoke", border:"black 1px solid", borderRadius:"5px", padding:"1.5px", paddingTop:"0.0px", textDecorationLine:"none", color:"black"}} >
                                Edit
                        </Link>
                        <Link to={`contact/${x.id}`}>{`${x.firstName} ${x.lastName}`}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContactList