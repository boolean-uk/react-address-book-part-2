import { useForm } from "react-hook-form";
import { Contact } from "../types";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ContactContext } from "../App";

async function registerContact(contact: Contact) {
  console.log(contact);
  const url = "https://boolean-uk-api-server.fly.dev/kristbsy/contact";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  console.log(response);
}

export default function AddContact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Contact>();
  const { updateContacts } = useContext(ContactContext);
  const nav = useNavigate();

  async function formSubmit(contact: Contact) {
    await registerContact(contact);
    updateContacts();
    nav("/");
  }

  return (
    <>
      <h1>Add new contact</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label>First Name: </label>
        <input
          type="text"
          {...register("firstName", { required: true })}
        ></input>
        {errors.firstName && <span> This field is required</span>}
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          {...register("lastName", { required: true })}
        ></input>
        {errors.lastName && <span> This field is required</span>}
        <br />
        <label>City: </label>
        <input type="text" {...register("city", { required: true })}></input>
        {errors.city && <span> This field is required</span>}
        <br />
        <label>Street: </label>
        <input type="text" {...register("street", { required: true })}></input>
        {errors.street && <span> This field is required</span>}
        <br />
        <label>Gender: </label>
        <input type="text" {...register("gender")}></input>
        <br />
        <label>Email: </label>
        <input type="email" {...register("email")}></input>
        <br />
        <label>Job Title: </label>
        <input type="text" {...register("jobtitle")}></input>
        <br />
        <label>Latitude: </label>
        <input
          type="number"
          {...register("latitude", { valueAsNumber: true })}
        ></input>
        <br />
        <label>Longitude: </label>
        <input
          type="number"
          {...register("longitude", { valueAsNumber: true })}
        ></input>
        <br />
        <label>Favourite Color: </label>
        <input type="text" {...register("favouriteColour")}></input>
        <br />
        <label>Profile Image: </label>
        <input type="text" {...register("profileImage")}></input>
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
