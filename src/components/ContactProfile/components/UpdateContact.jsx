import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateContact(props) {
    const{url, fetchData } = props
    const{id} = useParams()
    console.log(id)
        const initialFormState= {
            firstName: "",
            lastName: "",
            street: "",
            city: ""
        }
        const navigate = useNavigate()
    
        const[form, setForm] = useState(initialFormState)
    
        function handleChange(event) {
            const inputName = event.target.name 
            const inputValue = event.target.value
    
            if (inputName ==="firstName") {
                setForm({...form, firstName: inputValue})
            } else if (inputName === "lastName") {
                setForm({...form, lastName: inputValue})
            } else if (inputName === "street") {
                setForm({...form, street: inputValue})
            } else setForm({...form, city: inputValue})
        }
    
        const submitForm = async(event) =>{
            event.preventDefault()
            console.log(url)
            try{
                await fetch(url+`/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form)
                })
            } catch (error) {
                console.error()
            }
    
            await fetchData()
            setForm(initialFormState)
            navigate('/contact/'+id)
        }
    
        
        return (<>
        <form className="addContactForm" onSubmit={submitForm}>
            <h2>Update Contact</h2>
            <label>First Name
                <br></br>
               <input
               type="text"
               name="firstName"
               onChange={handleChange}
               value={form.firstName}/>
            </label>
            <br></br>
            <br></br>
            <label>Last Name
                <br></br>
               <input
               type="text"
               name="lastName"
               onChange={handleChange}
               value={form.lastName}/>
            </label>
            <br></br>
            <br></br>
            <label>Street
                <br></br>
               <input
               type="text"
               name="street"
               onChange={handleChange}
               value={form.street}/>
            </label>
            <br></br>
            <br></br>
            <label>City
                <br></br>
               <input
               type="text"
               name="city"
               onChange={handleChange}
               value={form.city}/>
            </label>
            <br></br>
            <br></br>
                <input className="form__submit" type="submit" 
                value="Update" />
        </form>
        </>)
    }