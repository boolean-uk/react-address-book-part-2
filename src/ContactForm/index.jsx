import { useContext, useState } from "react"
import { ContactsContext } from "../App";
import { useNavigate } from "react-router-dom";

function ContactForm(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    const {fetchAndSetContacts, url} = useContext(ContactsContext);

    const navigate = useNavigate();
    
    const handleChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }

    const handeSubmit = async (event) => {
        event.preventDefault();
        await fetch(url, {
          method: 'POST',
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        fetchAndSetContacts();

        setFormData({
            firstName: "",
            lastName: "",
            street: "",
            city: ""
        });

        navigate("/contacts");
    }

    return(
        <div>
            <h1> Add Contact </h1>
            <form onSubmit={handeSubmit}>
                <TextInput
                question={"First name:"}
                inputName={"firstName"}
                formData={formData}
                handleChange={handleChange}/>
                
                <TextInput
                question={"Last name:"}
                inputName={"lastName"}
                formData={formData}
                handleChange={handleChange}/>

                <TextInput
                question={"Street:"}
                inputName={"street"}
                formData={formData}
                handleChange={handleChange}/>

                <TextInput
                question={"City:"}
                inputName={"city"}
                formData={formData}
                handleChange={handleChange}/>

                <input
                type="submit"
                value={"Add"}/>
            </form>
        </div>
    )
}

export default ContactForm


function TextInput({question, inputName, formData, handleChange}){
    return(
        <label> {question}
            <input
            type="text"
            name={inputName}
            value={formData[inputName]}
            onChange={handleChange}/>
        </label>
    )   
}