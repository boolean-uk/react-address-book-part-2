import { useContext } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

export default function CreateContact() {
  const { contacts, setContacts } = useContext(Context);
  const navigate = useNavigate();

  const postContact = (e) => {
    e.preventDefault();
    navigate("/");
    setContacts([
      ...contacts,
      {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        street: e.target.form[2].value,
        city: e.target.form[3].value,
      },
    ]);
  };

  return (
    <form>
      <label>First name:</label>
      <input type="text" name="first-name"></input>

      <label>Last name:</label>
      <input type="text" name="last-name"></input>

      <label>Street:</label>
      <input type="text" name="street"></input>

      <label>City:</label>
      <input type="text" name="city"></input>

      <input type="submit" onClick={postContact}></input>
    </form>
  );
}
