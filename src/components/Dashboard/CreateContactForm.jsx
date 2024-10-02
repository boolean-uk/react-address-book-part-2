import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { CreateContact, UpdateAContact } from "../../ContactAPI/ContactAPIs";

export default function CreateContactForm() {
    const {formData, setFormData, contacts, setContacts} = useContext(AppContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const editing = Boolean(id);

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
            console.log("Define the input!");
            return;
        }

        if (editing) {
            UpdateAContact(id, formData);
            resetForm();

            setContacts((prev) => 
                prev.map((contact) => 
                contact.id === Number(id) ? {...contact, ...formData} : contact)
            );
            navigate(`/view/${id}`);
        } else {
            CreateContact(formData);
            resetForm();
            navigate("/contacts"); 
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("INPUT CHANGED: ", {name, value});
        setFormData((prev) => ({...prev, [name] : value}));
    }

    const resetForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            street: "",
            city: ""
        });
      }

    return (
        <form className="createContactForm" onSubmit={handleSubmit}>
            <h3>Enter your firstname:</h3>
            <input type="text" name="firstName" onChange={handleChange} value={formData.firstName}></input>

            <h3>Enter your lastname:</h3>
            <input type="text" name="lastName" onChange={handleChange} value={formData.lastName}></input>

            <h3>Enter your street:</h3>
            <input type="text" name="street" onChange={handleChange} value={formData.street}></input>

            <h3>Enter your city:</h3>
            <input type="text" name="city" onChange={handleChange} value={formData.city}></input>

            <input className="form_submit" type="submit" value={editing ? "Save Changes" : "Submit Contact"} />
        </form>
    );

}