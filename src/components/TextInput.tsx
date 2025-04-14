import React, { useContext } from "react";
import { UseFormRegister } from "react-hook-form";
import { User } from "../objects/UserObjects";
import { ContactFormContext } from "../pages/CreateContactsPage/AlterContact";


export default function UserInput(props : {userProp: keyof User;
                                            label: string;
                                            
}){
    
    const { userProp, label } = props;
    const { register } = useContext(ContactFormContext)
    return (
        <div className="form-group">
        <label>
            {label}
        </label>
        <input {...register(userProp)}
                type="text"
                name={userProp}/>
        </div>
    );
}