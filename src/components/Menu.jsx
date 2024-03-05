import { Link, useParams } from "react-router-dom";

const Menu = (props) => {

    const {username} = useParams();

    const {updatedContacts, setUpdatedContacts, contacts} = props ?? {};


    const filterOnChange = (e) => {
        e.preventDefault();
        setUpdatedContacts(contacts.filter((contact) => contact.firstName.toLowerCase().includes(e.target.value) || contact.lastName.toLowerCase().includes(e.target.value)))
        
    }

    return (
        <>
            <h1>Menu</h1>
            <div>
            <Link to={`/${username}`}>Contacts List</Link>

            </div>
            <div>
            <Link to={`/${username}/createcontact`}>Add New Contact</Link>
            </div>
            {updatedContacts && 
            <input 
            type="text"
            id="filterContacts"
            name="filterContacts"
            onChange={filterOnChange}
            />
            }
        </>
        
    );
}

export default Menu;