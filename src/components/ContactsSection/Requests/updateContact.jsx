import { useContext, useState } from "react";
import { ContactContext } from "../../../App";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateContact(){
    const context = useContext(ContactContext);
    const { id } = useParams()
    const navigate = useNavigate()

    const initialData = {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
      };

    const [contactData, setContactData] = useState(initialData)

      function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
    
        console.log(inputName, inputValue);
    
        if (inputName == "firstName") {
          setContactData({ ...contactData, firstName: inputValue });
        }
    
        if (inputName == "lastName") {
          setContactData({ ...contactData, lastName: inputValue });
        }
    
        if (inputName == "street") {
          setContactData({ ...contactData, street: inputValue });
        }
    
        if (inputName == "city") {
          setContactData({ ...contactData, city: inputValue });
        }
      }

    
    const putContact = async (event) => {
        event.preventDefault();
        
        await axios
        .put(`https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${id}`,
            contactData
        )

        axios.get('https://boolean-uk-api-server.fly.dev/LudwigJL/contact')
        .then(res => context.setContacts(res.data))

        navigate("/contacts");
        setContactData(initialData);
    };

      return (
        <>
          <section>
            <form onSubmit={putContact}>
              <label>
                First name:
                <input
                  type="text"
                  name="firstName"
                  value={contactData.firstName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Last name:
                <input
                  type="text"
                  name="lastName"
                  value={contactData.lastName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Street:
                <input
                  type="text"
                  name="street"
                  value={contactData.street}
                  onChange={handleChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={contactData.city}
                  onChange={handleChange}
                />
              </label>
              <input type="submit" value="Update" />
            </form>
          </section>
        </>
      );
}
