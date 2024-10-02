import { ContactContext } from "C:/Users/TMajlu/Documents/Java Workshop/Week 8/Day 3/react-address-book-part-2/src/App.jsx"
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewContact() {

  const context=useContext(ContactContext)
  const{setContacts}=context
  const{contacts}=context
  const navigate = useNavigate();

    
  const [formData, setFormData] = useState({
      firstName: "",
      lastName:"",
      street: "",
      city: "",
    }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, formData]);
    navigate("/contacts");
  };

  
 
  
  

  return (
      <form className="form">
          <h2>Create Contact</h2>
          
          
          <label
              >First name:<input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              
          </label>

          <label
              >Last name:<input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              
          </label>

          <label
              >City:<input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              
          </label>

          <label
              >Street:<input
              type="text"
              name="street"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              />
              
          </label>
          
          <input className="form__submit" type="submit" value="Submit Survey!" onClick={handleSubmit}/>
      </form>
    )
}

export default NewContact