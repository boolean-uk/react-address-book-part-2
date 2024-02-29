import { useNavigate } from "react-router-dom";

const DeleteContact = ({ id }) => {
  const navigate = useNavigate();

  const deleteContact = async () => {
    const response = await fetch(
      `https://boolean-api-server.fly.dev/krzysztofmmm/contact/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete contact");
    }

    navigate("/"); // Navigate back to the contact list
  };

  return <button onClick={deleteContact}>Delete Contact</button>;
};

export default DeleteContact;
