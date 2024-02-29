import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateContact({ updateContactList, isUpdating }) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: "",
    longitude: "",
    favouriteColour: "",
    profileImage: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchContactDetails = (contactId) => {
    fetch(
      `https://boolean-api-server.fly.dev/Eliassoprani/contact/${contactId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          console.log();
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching contact details:", error);
      });
  };

  useEffect(() => {
    if (id) {
      fetchContactDetails(id);
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    updateContactList(userInfo);
    if (isUpdating) {
      navigate(`/contactdetails/${id}`);
    } else {
      navigate("/");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(userInfo).map((key) => (
        key !== "id" && (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              name={key}
              onChange={handleChange}
              value={userInfo[key]}
            />
          </div>
        )
      ))}
      <button
        type="submit"
        disabled={
          !userInfo.firstName ||
          !userInfo.lastName ||
          !userInfo.street ||
          !userInfo.city
        }
      >
        {isUpdating ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default CreateContact;
