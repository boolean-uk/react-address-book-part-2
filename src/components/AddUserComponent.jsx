import { useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export const AddUserComponent = () => {
  const { setUserList } = useContext(UserContext);
  const Navigate = useNavigate();
  const UserBody = {
    "firstName": "",
    "lastName": "",
    "street": "",
    "city": "",
    "gender": "",
    "email": "",
    "jobTitle": "",
    "latitude": 42,
    "longitude": 42,
    "favouriteColour": "",
    "profileImage": "",
  };
  const inputFields = [
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "street", label: "Street", type: "text" },
    { id: "city", label: "City", type: "text" },
    { id: "gender", label: "Gender", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "jobTitle", label: "Job Title", type: "text" },
    { id: "favouriteColour", label: "Favourite Colour", type: "text" },
    { id: "profileImage", label: "Profile Image URL", type: "text" },
  ];

  const [newUser, setNewUser] = useState(UserBody);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };
    const response = await fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/contact",
      request
    );
    if (response.ok) {
      const user = await response.json();
      setUserList((userList) => [...userList, user]);
    }
    Navigate("/contactlist");
  };

  return (
    <form onSubmit={HandleSubmit}>
      {inputFields.map((field) => {
        return (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              onChange={handleChange}
              value={newUser[field.id]}
            />
          </div>
        );
      })}
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserComponent;
