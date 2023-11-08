import "./Form.css";
import { useNavigate } from "react-router-dom";

function Form (props) {

    const { contact, contacts, setContacts } = props;

    const navigate = useNavigate();

    function handleFormSubmit (event) {
        event.preventDefault();
        console.log("Form submitted!");
        //adding the new conact to the contacts array will go here
        setContacts([...contacts, contact]);
        //routing will also go here to return back to the dashboard or contact list page
        navigate("/");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className = "form-element">
                <label htmlFor = "First Name">First Name:</label>
                <input 
                type = "text" 
                placeholder = "First Name" 
                value={contact.firstName} 
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Last Name">Last Name:</label>
                <input 
                type = "text" 
                placeholder = "Last Name"
                value={contact.lastName} 
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Street">Street:</label>
                <input 
                type = "text" 
                placeholder = "Email" 
                value={contact.street}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "City">City:</label>
                <input 
                type = "text" 
                placeholder = "City"
                value={contact.city} 
                />
            </div>
            <button type = "submit">Add Contact</button>
        </form>
    )
}

export default Form;