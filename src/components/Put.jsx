
import { useContext,useState  } from "react"
import { MyContext} from "../App"
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import Delete from "./Delete";

export default function Putt(){
    const context = useContext(MyContext)
    const { id } = useParams();

  const personn = context.contacts.find((x) => x.id.toString() === id.toString());

    const [person, setPerson] = useState(personn)
    
    const navigate = useNavigate();



    console.log(person);

    
    const handleChange =  (e) => {
        const { name, value } = e.target
        setPerson({
          ...person,
          [name]: value,
        })
        localStorage.setItem(name, value)
    }

        const handleSubmit = async (e) => {
        e.preventDefault()
        

            try {
    const response = await fetch('https://boolean-uk-api-server.fly.dev/emazau/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(person), // Convert data to JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('User successfully added!');
      console.log(result);
      context.setContacts([...context.contacts, result])
        localStorage.clear()
        setPerson(inital)
    } catch (error) {
      console.log('Error posting data');
      console.error('Error:', error);
      localStorage.clear()
      setPerson(inital)
    }

    navigate('/contacts')
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" name="firstName" onChange={handleChange} value={person.firstName}></input>
            </label>
            <br/>
            <label>
              Last Name:
              <input type="text" name="lastName" onChange={handleChange} value={person.lastName}></input>
            </label>
            <br/>
                        <label>
              Street:
              <input type="text" name="street" onChange={handleChange} value={person.street}></input>
            </label>
            <br/>
                        <label>
              City:
              <input type="text" name="city" onChange={handleChange} value={person.city}></input>
            </label>
            <br/>

            <input type="submit" value="Post!"></input>
        </form>
    </>);

 

}


