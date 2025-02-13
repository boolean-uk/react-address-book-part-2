import { useForm} from "react-hook-form"
import { Contact } from "./interfaces"
import { useNavigate } from "react-router"
import { ContactContext } from "../App";
import { useContext } from "react";


function AddContact() {
    const {updateContacts} = useContext(ContactContext);
    const { register, handleSubmit} = useForm<Contact>()
    const navigate = useNavigate();

    async function posting(contact: Contact) {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/AkselSau/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact)
        })
        console.log(response)
    }

    async function submitting(contact: Contact) {
        await posting(contact);
        updateContacts();
        navigate("/");
    }

      return (
        <div>
        <h1>Add Contact</h1>
        <form onSubmit={handleSubmit(submitting)}>
            <label>First Name</label>
            <input {...register("firstName", {required:true})} /> <br />
            <label>Last Name</label>
            <input {...register("lastName", {required:true})}/> <br />
            <label>City</label>
            <input {...register("city", {required:true})}/> <br />
            <label>Street</label>
            <input {...register("street", {required:true})}/> <br />
            <label>Gender</label>
            <input {...register("gender", {required:true})}/> <br />
            <label>Email</label>
            <input {...register("email", {required:true})}/> <br />
            <label>JobTitle</label>
            <input {...register("jobTitle", {required:true})}/> <br />
            <label>Latitude</label>
            <input {...register("latitude", {required:true})}/> <br />
            <label>Longitude</label>
            <input {...register("longitude", {required:true})}/> <br />
            <label>FavouriteColour</label>
            <input {...register("favouriteColour", {required:true})}/> <br />
            <label>ProfileImage</label>
            <input {...register("profileImage", {required:true})}/> <br />
            <input type="submit" />
        </form>
        </div>
      )
}
export default AddContact;