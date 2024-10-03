import { useContext, useEffect } from "react";
import { ContactContext } from "../App";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function CreateForm() {

    const initialFormData = {
      firstName: "",
      lastName: "",
      street: "",
      city: ""
    };

    const { fetchContacts, contacts } = useContext(ContactContext);
    const [formData, setFormData] = useState(initialFormData);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      if (id) {
        const contactToEdit = contacts.find((contact) => contact.id === parseInt(id));
        if (contactToEdit) {
          setFormData(contactToEdit);
        }
      }
    }, [id, contacts]);
    

    async function handleSubmit(event) {
      event.preventDefault();

      if (id) {
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/contact/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        navigate(`/contact/${id}`); 
      } else {
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        navigate('/'); 
      }
  
        await fetchContacts();
        setFormData(initialFormData);
        
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
        <div>
            <h2>----------------------------------New contact---------------------------------</h2>
            <form onSubmit={handleSubmit} className="margin">
              <b className="margin-item">First Name: </b>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <b className="margin-item">Last Name: </b>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <b className="margin-item">City: </b>
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <b className="margin-item">Street: </b>
              <div>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <button type="submit">{id ? "Update" : "Create"}</button>
            </form>
        </div>
    )
  }
  