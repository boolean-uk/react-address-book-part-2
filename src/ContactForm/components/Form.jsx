import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Form () {

  const url = "https://boolean-uk-api-server.fly.dev/Richard-Persson/contact";
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    street:"",
    city:"",
    id: 10000,
  })

  const post = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(userData),
    })}

const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
    event.preventDefault()
    post();
    navigate("/")

  }


  return(<>

    <form onSubmit={handleSubmit} method="POST" action="/">



      <label> First Name
        <input type="text" name="firstName" onChange={handleChange}/>
      </label>
      <br/>
      <label> Last Name
        <input type="text" name="lastName"onChange={handleChange}/>
      </label>
      <br/>
      <label> Street
        <input type="text" name="street"onChange={handleChange}/>
      </label> 
      <br/>
      <label> City
        <input type="text" name="city"onChange={handleChange}/>
      </label>
      <br/>
      <br/>
      <button type="submit"> Add</button>

    </form>


  </>)
}
