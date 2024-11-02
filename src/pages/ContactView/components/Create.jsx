import { useContext } from "react";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom";

function Create() {

  const { saveData } = useContext(AppContext)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    saveData(data)
    navigate('/')
  } 

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input name="firstName" /><br />

        <label htmlFor="lastName">Last Name </label>
        <input name="lastName" /><br />

        <label htmlFor="city">City </label>
        <input name="city" /><br />

        <label htmlFor="street">Street </label>
        <input name="street" /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
  
  export default Create;