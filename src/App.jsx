import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactDashboard from "./components/ContactDashboard";
import CreateContact from "./components/CreateContact";
import ContactDetails from "./components/ContactDetails";
import NavBar from "./components/NavBar";

function App() {
  const [contactList, setContactList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch("https://boolean-api-server.fly.dev/Eliassoprani/contact")
      .then((res) => res.json())
      .then((data) => {
        const fixedData = data.map((person) => ({
          firstName: person.firstName,
          lastName: person.lastName,
          street: person.street,
          city: person.city,
          gender: person.gender,
          email: person.email,
          jobTitle: person.jobTitle,
          latitude: person.latitude,
          longitude: person.longitude,
          favouriteColour: person.favouriteColour,
          profileImage: person.profileImage,
          id: person.id,
        }));
        setContactList(fixedData);
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  };

  const postContactList = (newContact) => {
    console.log("post", newContact);

    fetch("https://boolean-api-server.fly.dev/Eliassoprani/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        fetchContacts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateContactList = (newContact) => {
    newContact.latitude = Number(newContact.latitude);
    newContact.longitude = Number(newContact.longitude);
    if (isUpdating) {
      updateContact(newContact.id, newContact);
      setIsUpdating(false);
    } else {
      postContactList(newContact);
    }
  };

  const deleteContact = (contactId) => {
    fetch(
      `https://boolean-api-server.fly.dev/Eliassoprani/contact/${contactId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Contact deleted successfully");
        fetchContacts();
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  const updateContact = (contactId, updatedContact) => {
    fetch(
      `https://boolean-api-server.fly.dev/Eliassoprani/contact/${contactId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Contact updated successfully");
        fetchContacts();
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ContactDashboard contactList={contactList} />}
        />
        <Route
          path="/createcontact"
          element={
            <CreateContact
              updateContactList={updateContactList}
              isUpdating={isUpdating}
            />
          }
        />
        <Route
          path="/updatecontact/:id"
          element={
            <CreateContact
              updateContactList={updateContactList}
              isUpdating={isUpdating}
            />
          }
        />
        <Route
          path="/contactdetails/:id"
          element={
            <ContactDetails
              contactList={contactList}
              setIsUpdating={setIsUpdating}
              deleteContact={deleteContact}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
