import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateContact(props) {
    const { contacts } = props  //behövs för att visa nuvarande namn, adress osv

    const navigate = useNavigate();
    // Get the `id` parameter from the URL path
    const { id } = useParams();

    const [updatedContactData, setupdatedContactData] = useState(null)

    //for placeholder values in form
    useEffect(() => {
        if (contacts && id) {
            setupdatedContactData(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
    }, [contacts, id]);

    const clearForm = {
        firstName: '',
        lastName: '',
        street: '',
        city: '',
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setupdatedContactData(updatedContactData => ({
            ...updatedContactData,
            [inputName]: inputValue,
        }));
    }

    const submitForm = (event) => {
        //log answers to console
        //console.log(contactData)

        event.preventDefault()

        //upddatera med PUT anrop
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/contact/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedContactData)
        })

        //cleara form
        setupdatedContactData(clearForm)

        //navigate to the updated user
        navigate(`/contacts/${id}`);
    }

    //placeholder innan contacts hämtats. behövs här
    if (!updatedContactData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Create new contact</h2>
            < form className="form" >
                <label>First name
                    <input
                        type="text"
                        name="firstName"
                        value={updatedContactData.firstName}
                        onChange={handleChange}>
                    </input>
                </label>

                <label>Last name
                    <input
                        type="text"
                        name="lastName"
                        value={updatedContactData.lastName}
                        onChange={handleChange}>
                    </input>
                </label>

                <label>Street
                    <input
                        type="text"
                        name="street"
                        value={updatedContactData.street}
                        onChange={handleChange}>
                    </input>
                </label>

                <label>City
                    <input
                        type="text"
                        name="city"
                        value={updatedContactData.city}
                        onChange={handleChange}>
                    </input>
                </label>

                <input
                    className="form__submit"
                    type="submit"
                    value="Update"
                    onClick={submitForm} />
            </form >
        </div>
    )
}

export default UpdateContact