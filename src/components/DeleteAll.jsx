import { useNavigate } from "react-router-dom";

function DeleteALL({ setContacts }) {
  const navigate = useNavigate();

  const handleDeleteAll = () => {
    fetch("https://boolean-api-server.fly.dev/pialoana/contact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setContacts([]);
        navigate("/contact");
      } else {
        throw new Error("Failed to delete all contacts");
      }
    });
  };

  return <button onClick={handleDeleteAll}>Delete All Contacts</button>;
}

export default DeleteALL;
