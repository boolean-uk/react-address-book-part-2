import { useContext, useEffect, useState } from "react";
import { MyPeopleContext } from "../../App";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function PersonView() {
  const myPeople = useContext(MyPeopleContext);
  const [person, setPerson] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setPerson(myPeople.people.find((p) => p.id === parseInt(id)));
    console.log(person);
  }, []);

  const deleteContact = async () => {
    const removeContact = myPeople.people.findIndex((p) => p.id === id);

    myPeople.people.splice(removeContact, 1);

    await fetch(
      `https://boolean-uk-api-server.fly.dev/valen98/contact/${person.id}`,
      {
        method: "DELETE",
      }
    );

    navigate("/");
  };

  const edit = () => {
    navigate(`/person/${person.id}/edit`);
  };

  if (!person) return <h3>Loading...</h3>;
  console.log(myPeople.people);
  return (
    <div className="profileDiv">
      <h3>
        {person.firstName} {person.lastName}
      </h3>

      <p>
        {person.street}, {person.city}
      </p>
      <div className="editAndDelete">
        <Button variant="contained" onClick={edit}>
          Edit
        </Button>
        <Button variant="contained" onClick={deleteContact}>
          Delete
        </Button>
      </div>
    </div>
  );
}
