import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext, BASE_URL } from "../App";
import { ContactInfo } from "../types";
import { useNavigate, useParams } from "react-router-dom";

function UpdateContactForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts, setContacts, refetch } = useContext(AppContext);
  const contact: ContactInfo | undefined = id ? contacts.find((c) => (c.id === parseInt(id))): undefined;
  const { register, handleSubmit } = useForm<ContactInfo>({
    defaultValues: contact,
  });

  const onSubmit = async (updateContact: ContactInfo) => {
      const prevContacts = contacts;
      const formatContact = {
        ...updateContact,
        latitude: Number(updateContact.latitude),
        longitude: Number(updateContact.longitude),
      }
      try {
        const request = await fetch(`${BASE_URL}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formatContact),
        });
  
        if (!request.ok) {
          throw new Error("Failed to update new contact");
        }
        setContacts((prev) => [...prev, updateContact]);
        refetch();
      } catch (error) {
        console.error("Error updating contact", error);
        setContacts(prevContacts);
      }
      console.log(contacts);
      navigate(`/contact/${id}`);
    };

    if(!contact) return <div>refresh</div>
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Update Contact</h2>

      <div className="form-input">
        <label>First Name</label>
        <input defaultValue={contact.firstName} {...register("firstName")} />
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
        <input type="email" {...register("email")} />
      </div>

      <div className="form-input">
        <label>Job Title</label>
        <input {...register("jobTitle")} />
      </div>

      <div className="form-input">
        <label>Latitude</label>
        <input type="number" step="any" {...register("latitude")} />
      </div>

      <div className="form-input">
        <label>Longitude</label>
        <input type="number" step="any" {...register("longitude")} />
      </div>

      <div className="form-input">
        <label>Favourite Colour</label>
        <input type="color" {...register("favouriteColour")} />
      </div>

      <div className="form-input">
        <label>Profile Image URL</label>
        <input type="url" {...register("profileImage")} />
      </div>

      <button type="submit">Update Contact</button>
    </form>
  );
}

export default UpdateContactForm;
