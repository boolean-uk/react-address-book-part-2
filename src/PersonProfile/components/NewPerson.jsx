import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { MyPeopleContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function NewPerson() {
  const myPeople = useContext(MyPeopleContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPerson = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
    };

    await fetch("https://boolean-uk-api-server.fly.dev/valen98/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .then((res) => res.json())
      .then((data) => {
        myPeople.people.push(data)
        myPeople.setPeople(myPeople.people);
      });

    navigate("/");
  };

  return (
    <div className="input-box">
      <form>
        <h3>Add new people!</h3>
        <div className="textfields">
          <TextField
            id="first-name"
            label="First Name"
            variant="standard"
            className="textField"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            className="textField"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="street"
            label="Street"
            variant="standard"
            className="textField"
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            id="city"
            label="City"
            variant="standard"
            className="textField"
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="submitButton">
            <Button variant="contained" onClick={handleSubmit}>
              Create!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
