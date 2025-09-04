import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../App";

function Contact() {

    const { id } = useParams();
    const {api, contacts, setcontacts} = useContext(ApiContext)
    const item = contacts.find((x) => x.id == Number(id));
    const navigate = useNavigate();

    const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${api}/Vegard-S/contact/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

      });
      if (res.status === 200) {
        console.log("success");
      }
      setcontacts((prev) => prev.filter((contact) => contact.id !== Number(id)));
      navigate("/");
    } catch (err) {
      console.log(err.message);
      console.log(err);
    }
  };

    return (
        <>
        <h1>{item ? item.firstName + " " + item.lastName : "Contact not found"}</h1>
        <p>{item ? item.street + " " + item.city: "Contact not found"}</p>
        <button onClick={() => navigate(`/update/${item.id}`)}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        </>
    );
}
export default Contact