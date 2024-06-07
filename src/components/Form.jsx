import {useState} from 'react'
const initialState = {
  firstname: "",
  lastname: '',
  street: '',
  city: '',
}
function Form(props) {
  const [form, setForm] = useState(initialState)
  const {getContact, URL} = props
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log(form)
    setForm(initialState)
    createNewcontact()

  }

  const createNewcontact = () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: form.firstname,
          lastName: form.lastname,
          street: form.street,
          city: form.city,
        })
    }
    fetch(URL, options)
    .then(res => res.json())
    .then(() => getContact())
}
  const handleChange = (event) => {
    const { name, type, value } = event.target;
    if (type === 'text') {
      setForm({ ...form, [name]: value })
    } 
    console.log(event.target)
  }

  return (
    <div className="form" onSubmit={submitForm}>
      <h1>Create Contact</h1>
      <form>
        <label>
          FirstName
          <input 
          onChange={(event) => handleChange(event)}
          name="firstname" 
          type="text" 
          value={form.firstname}></input>
        </label>
        <label>
          LastName
          <input 
          onChange={(event) => handleChange(event)}
          name="lastname" 
          type="text"
          value={form.lastname}></input>
        </label>
        <label>
          Street
          <input 
          onChange={(event) => handleChange(event)}
          name="street" 
          type="text"
          value={form.street}>
          </input>
        </label>
        <label>
          City
          <input onChange={(event) => handleChange(event)}
          name="city" 
          type="text"
          value={form.city}>
          </input>
        </label>
        <input className="form__submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
export default Form;
