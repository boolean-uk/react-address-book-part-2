import { useForm } from "react-hook-form";
import { ContactInfo } from "../types";
import { AppContext, BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function ContactAddForm() {
  const { register, handleSubmit } = useForm<ContactInfo>();
  const { contacts, setContacts, refetch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRegistration = async (newContact: ContactInfo) => {
    const prevContacts = contacts;
    console.log(newContact)
    const formatContact = {
      ...newContact,
      latitude: Number(newContact.latitude),
      longitude: Number(newContact.longitude),
    }
    console.log(newContact)
    try {
      const request = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatContact),
      });

      if (!request.ok) {
        throw new Error("Failed to add new contact");
      }
      setContacts((prev) => [...prev, newContact]);
      refetch();
    } catch (error) {
      console.error("Error adding contact", error);
      setContacts(prevContacts);
    }
    console.log(contacts);
    navigate("/");
  };
  
  return (
    <form
      onSubmit={handleSubmit(handleRegistration)}
      className="form-container"
    >
      <h1>Create Contact</h1>
      <div className="form-input">
        <label>First Name</label>
        <input {...register("firstName")} />
      </div>
      <div className="form-input">
        <label>Last Name</label>
        <input {...register("lastName")} />
      </div>
      <div className="form-input">
        <label>Street</label>
        <input {...register("street")} />
      </div>
      <div className="form-input">
        <label>City</label>
        <input {...register("city")} />
      </div>
      <div className="form-input">
        <label>Gender</label>
        <input {...register("gender")} />
      </div>
      <div className="form-input">
        <label>Email</label>
        <input {...register("email")} />
      </div>
      <div className="form-input">
        <label>Job Title</label>
        <input {...register("jobTitle")} />
      </div>
      <div className="form-input">
        <label>Latitude</label>
        <input type="number" {...register("latitude")} />
      </div>
      <div className="form-input">
        <label>Longitude</label>
        <input type="number" {...register("longitude")} />
      </div>
      <div className="form-input">
        <label>FavouriteColour</label>
        <input type="color" {...register("favouriteColour")} />
      </div>
      <div className="form-input">
        <label>Profile Image URL</label>
        <input {...register("profileImage")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactAddForm;
