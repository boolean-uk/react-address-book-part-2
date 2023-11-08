import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactListItem(props) {
  const { data } = props;
  const [displayPerson, setDisplayPerson] = useState(null);

  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    if (id && data) {
      setDisplayPerson(data.find((person) => Number(person.id) === Number(id)));
    }
  }, [id, data]);
  console.log(displayPerson);
  if (!displayPerson) return <p>Loading ...</p>;
  return (
    <>
      <h2>
        {displayPerson.firstName} {displayPerson.lastName}
      </h2>
      <p>City : {displayPerson.city}</p>
      <p>Street : {displayPerson.street}</p>
    </>
  );
}

export default ContactListItem;
