import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteProfile({deleteContact}) {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        await deleteContact(Number(id));
        setId("");
        navigate("/");
    }
  return (
    <><h3>Delete Profile</h3><form onSubmit={handleSubmit}>
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} required />
         
          <button type="submit">Delete</button>
      </form></>
  )
}

export default DeleteProfile
