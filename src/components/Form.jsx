import { useState, useEffect} from "react"

const FORMBODY = {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
}

function CreateContact() {
    const [form, setForm] = useState(FORMBODY)
    // const [formSubmitted, setFormSubmitted] = useState(false)


    const postData = (form) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        }

        fetch('https://boolean-api-server.fly.dev/Usamaibrahim33/contact', options)
          .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('something happened')
            }
          })
         
          .then((data) => console.log('this is the data sent', data))
          .catch((error) => {
            console.log('this is the error', error)
          })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedForm = {};
        formData.forEach((value, name) => {
            updatedForm[name] = value;
        });

        postData(updatedForm);
        setForm(updatedForm)
        formData.forEach((value, name) => {
            event.target[name].value = '';
        });

    };




    return (
        <form className="createform" onSubmit={handleSubmit}>
             <h1> Create Contact</h1>
             <label className="labelName" htmlFor="firstname">
                First Name*  <br />
                <input type="text" name="firstName" required placeholder="first Name"/> <br />
             </label>

             <label className="labels" htmlFor="lastname">
                Last Name* <br />
                <input type="text" name="lastName"  required placeholder="last Name"/>
             </label> <br />

             <label className="labels" htmlFor="street">
                Street Name* <br />
                <input type="text" name="street" required placeholder="street" />
             </label> <br />

             <label className="labels" htmlFor="city">
                City Name*  <br />
                <input type="text" name="city" required  placeholder="city"/>
             </label> <br />

             <button type="submit">Create</button>
        </form>
    )
}

export default CreateContact