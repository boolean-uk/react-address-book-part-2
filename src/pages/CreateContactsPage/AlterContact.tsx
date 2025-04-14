import React, { createContext, useContext, useState } from "react";
import { User } from "../../objects/UserObjects";
import { Link, Route, useFormAction, useNavigate } from "react-router-dom";
import { useForm, UseFormRegister } from "react-hook-form";
import UserInput from "../../components/TextInput";
import { AlterContactModes, ContactsContext } from "../../App";

export interface UserFormFunctions{
    register: UseFormRegister<User>
}

export const ContactFormContext = createContext({} as UserFormFunctions);


export default function AlterContact(){
    const {alteredContact, setAlteredContact, contactCreated, setContactCreated, 
            contactUpdated, setContactUpdated, alterContactMode, setAlterContactMode } = useContext(ContactsContext);
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        defaultValues: alteredContact,
    });
    const onSubmit = (data) => {
        setAlteredContact((prevUser) => ({ 
            ...prevUser, 
            ...data,
        })) //Update user by the form

        if (alterContactMode === AlterContactModes.Create){
            setContactCreated(!contactCreated); //Allert app to post contact
        }
        else if (alterContactMode === AlterContactModes.Update){
            setContactUpdated(!contactUpdated); //Allert app to update(put) contact
            setAlterContactMode(AlterContactModes.Create); // Set the AlterContactMode back to default (create)
        }
        
        navigate("/");
    };

    const Cancel = () => {
        setAlteredContact({} as User);
        setAlterContactMode(AlterContactModes.Create);
        navigate("/")
    }

    return (
        
    <ContactFormContext.Provider value={{register}} >
        
        <div className="form-container">
            <h1> {alterContactMode} Contact</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <UserInput userProp="firstName" label="First Name"/>
                <UserInput userProp="lastName" label="Last Name"/>
                <UserInput userProp="street" label="Street"/>
                <UserInput userProp="city" label="City"/>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => Cancel()}>Cancel</button>
            </form>
            
        </div>   
    </ContactFormContext.Provider>
    );
}