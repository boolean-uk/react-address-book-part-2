import { useContext, useEffect, useState } from "react";
import { MyPeopleContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export default function EditPerson() {
  const myPeople = useContext(MyPeopleContext);
  const [person, setPerson] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setPerson(myPeople.people.find((p) => p.id === parseInt(id)));
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const updatePerson = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
    };

    await fetch(`https://boolean-uk-api-server.fly.dev/valen98/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePerson),
    });

    await fetch("https://boolean-uk-api-server.fly.dev/valen98/contact")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        myPeople.setPeople(data);
      });

    navigate(`/person/${person.id}`);
  };

  if (!person) return <h3>Loading...</h3>;
  console.log(myPeople.people);
  return (
    <div className="input-box">
      <form onSubmit={handleSubmit}>
        <h3>
          Update {person.firstName} {person.lastName}
        </h3>
        <div className="textfields">
          <TextField
            id="first-name"
            label="First Name"
            variant="standard"
            className="textField"
            defaultValue={person.firstName}
            required={true}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            className="textField"
            defaultValue={person.lastName}
            required={true}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="street"
            label="Street"
            variant="standard"
            className="textField"
            defaultValue={person.street}
            required={true}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            id="city"
            label="City"
            variant="standard"
            className="textField"
            defaultValue={person.city}
            required={true}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="submitButton">
            <Button type="submit" variant="contained">
              Create!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
