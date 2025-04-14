import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Contact } from "../types";
import { useNavigate } from "react-router-dom";

function CreateContact(){
     const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Contact>()
      const onSubmit: SubmitHandler<Contact> = (data) => {
        console.log(data)
        //posting to db
        fetch('https://boolean-uk-api-server.fly.dev/sanderrasmussen/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
          })
          navigate(-1)
      }
    
    return(
        <div>
            <h1>Create new contact</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="Firstname" {...register("firstName")} />
      {errors.firstName && <span>This field is required</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={"lastName"}{...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"gender"}{...register("gender", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"email"}{...register("email", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"jobTitle"}{...register("jobTitle", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"street"}{...register("street", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"city"}{...register("city", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"latitude"}{...register("latitude",{valueAsNumber:true,  required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"longitude"}{...register("longitude",{valueAsNumber:true,  required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"favouriteColour"}{...register("favouriteColour", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input defaultValue={"profileImage"}{...register("profileImage", { required: true })} />
      {errors.lastName && <span>This field is required</span>}


      <input type="submit" />
    </form>
        </div>
    )
}
export default CreateContact;