
import { useEffect, useContext, useState} from 'react'
import { AppContext } from "../../../App";
import { useNavigate, useParams } from 'react-router-dom';
import { CreateContact, UpdateContact } from '../../ContactAPI/ContactAPIs';



export default function CreateContactsForm() {
    const { formData, setFormData, contacts, setContacts } = useContext(AppContext)
    const navigate = useNavigate()
    
    const { id } = useParams();
    const editing = Boolean(id)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prev) => ({...prev, [name] : value}));
    }

    useEffect(() => {
        if (editing) {
            const contactToEdit = contacts.find((c) => c.id === Number(id));
            if (contactToEdit) {
                setFormData(contactToEdit);
            }
        }
    }, [id, setFormData, editing]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.firstName === "" || formData.lastName === "" || formData.street === "" || formData.city === "") {
            console.log("fill out the form properly please :)");
            return;
        }
        if (editing) {
            UpdateContact(id, formData)
            resetForm()
            setContacts((prev) => 
                prev.map((contact) => 
                contact.id === Number(id) ? {...contact, ...formData} : contact)
            );
            navigate(`/view/${id}`)
        }
        else {
            CreateContact(formData)
            resetForm()
    
            navigate("/contacts")
        }
        //setFormData(formData)
        //setContacts([...contacts, formData])
        

    }

    const resetForm = () => {
        setFormData(formData)
    }
    return (
        <>
        <form className="CreateContactsForm" onSubmit={handleSubmit}>
            <h4>New Contact</h4>
            <h3>Enter your first name: </h3>
            <input type="text" name="firstName" onChange={handleChange} value ={formData.firstName}></input>

            <h3>Enter your last name: </h3>
            <input type="text" name="lastName" onChange={handleChange} value ={formData.lastName}></input>

            <h3>Enter your city: </h3>
            <input type="text" name="city" onChange={handleChange} value ={formData.city}></input>

            <h3>Enter your address: </h3>
            <input type="text" name="street" onChange={handleChange} value ={formData.street}></input>
            <h3> </h3>
            <input className="form_submit" type="submit" value={editing ? "Save Changes" : "Submit Contact"}></input>
        </form>
        </>
    )
}