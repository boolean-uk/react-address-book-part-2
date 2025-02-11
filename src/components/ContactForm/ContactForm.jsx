import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../../App';
import { useParams, useNavigate } from 'react-router-dom';

function ContactForm({dataForUserEdit}) {
    const {addContact, editContact, contacts} = useContext(AppContext);
    const {id} = useParams();
    const nav = useNavigate();
    const defUserDat= () => {
        return{
            firstName       : "",
            lastName        : "",
            street          : "",
            city            : "",
            gender          : "",
            email           : "",
            jobTitle        : "",
            latitude        : 0,
            longitude       : 0,
            favouriteColour : "",
            profileImage  : "",
            id  : -1
        }
    }
    const [newUser, setNewUser] = useState(defUserDat());

    useEffect(() => {
        if(contacts.length > 0 && id )
        {
            let usr = contacts.find(x=> x.id == Number(id));
            setNewUser({...usr});
            console.log(usr);
        }
        else if (!id)
        {
            setNewUser(defUserDat());
        }
    },
    [id,contacts]
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id)
            addContact(newUser);
        else 
            editContact(id, newUser);
        console.log(newUser);
        nav("/")
    }

    const handleChange = (e, name, val) => {
        console.log(e);
        // rewrite label into camelCase to work with Contact data
        if(e.currentTarget.type == "number" )
            setNewUser({...newUser, [name]:Number(val)})
        else 
            setNewUser({...newUser, [name]:val})
    }
    const getLabeledInput = (name, labelDisplay, type, extraInputArgs) => {
        return (
            <div className="contactField">
                <label htmlFor={name}>{labelDisplay}</label>
                <input type={type} {...extraInputArgs} name={name}  onChange={(e) => handleChange(e, name, e.currentTarget.value)} required/>
            </div>
        )
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {getLabeledInput("firstName",       "First Name",       "text"   , {value:newUser["firstName"]})}
            {getLabeledInput("lastName",        "Last Name",        "text"   , {value:newUser["lastName"]})}
            {getLabeledInput("street",          "Street",           "text"   , {value:newUser["street"]})}
            {getLabeledInput("city",            "City",             "text"   , {value:newUser["city"]})}
            {getLabeledInput("gender",          "Gender",           "text"   , {value:newUser["gender"]})}
            {getLabeledInput("email",           "Email",            "email"  , {value:newUser["email"]})}
            {getLabeledInput("jobTitle",        "Job Title",        "text"   , {value:newUser["jobTitle"]})}
            {getLabeledInput("latitude",        "Latitude",         "number" , {value:newUser["latitude"]})}
            {getLabeledInput("longitude",       "Longitude",        "number" , {value:newUser["longitude"]})}
            {getLabeledInput("favouriteColour", "Favorite Color",   "color"  , {value:newUser["favouriteColour"]})}
            {getLabeledInput("profileImage",    "Profile Image",    "text"   , {value:newUser["profileImage"]})}

            <input type='submit' value={id == null ?"Create Contact": "Edit Contact"}/>

        </form>
    )
}

export default ContactForm