import React, { useContext } from 'react';
import ContactListItem from './ContactListItem';
import { ContactsContext } from '../../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactList() {
    const { data, setData, url } = useContext(ContactsContext);
    const [id, setId] = useState("");
    const [searchBar, setSearchBar] = useState("");


    let searchWords = searchBar.trim().toLowerCase().split(" ");

    let currData = data.filter((contact) => {
        let fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase().trim();
        return searchWords.every(word => fullName.includes(word));
    });
    

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {value} = e.target;
        setId(value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        navigate(`/contact/${id}`)
    }

    const handleFilter = (event) => {
        setSearchBar(event.target.value.toLowerCase());
    }

    if (searchBar === ""){
        return (
            <>
            <div className='contact-list'>
                <h1>Contact List</h1>
                <Link to="/">
                    <p id="return">Return to menu</p>
                </Link>
                <form onSubmit={submitHandler} className="search-form">
                <div className="input-button-wrapper">
                    <input 
                    type="text" 
                    placeholder="Enter ID" 
                    onChange={handleInputChange} 
                    name="id-identifier" 
                    value={id}
                    />
                    <button type="submit">Search</button>
                    
                </div>
                
                </form>
                <form className = "search-form" action="">
                    <div className='input-button-wrapper'>
                        <input type="text" placeholder='Search by name' onChange={handleFilter}/>
                    </div>
                </form>
    
    
    
                <ul>
                    {data.map((content, index) => (
                        <ContactListItem key={index} contact={content} url = {url} setData={setData}  />
                    ))}
                </ul>
            </div>
            </>
            
        );
    }
    
    else {
        return (
            <>
            <div className='contact-list'>
                <h1>Contact List</h1>
                <Link to="/">
                    <p id="return">Return to menu</p>
                </Link>
                <form onSubmit={submitHandler} className="search-form">
                <div className="input-button-wrapper">
                    <input 
                    type="text" 
                    placeholder="Enter ID" 
                    onChange={handleInputChange} 
                    name="id-identifier" 
                    value={id}
                    />
                    <button type="submit">Search</button>
                    
                </div>
                
                </form>
                <form className = "search-form" action="">
                    <div className='input-button-wrapper'>
                        <input type="text" placeholder='Search by name' onChange={handleFilter}/>
                    </div>
                </form>
    
    
    
                <ul>
                    {currData.map((content, index) => (
                        <ContactListItem key={index} contact={content} url = {url} setData={setData}  />
                    ))}
                </ul>
            </div>
            </>
            
        );
    }
}

export default ContactList;
