import { useEffect, useState, } from "react"
import {useNavigate, useParams } from "react-router-dom";
import Header from "./Header";


function ContactForm({contacts, divTitle, saveContact}){
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [street, setStreet] = useState('');
const [city, setCity] = useState('');
const [gender, setGender] = useState('');
const [email, setEmail] = useState('');
const [jobTitle, setJobTitle] = useState('');
const [favouriteColour, setfavColour] = useState('#FFFFFF');
const [profileImage, setImage] = useState('');
const [latitude, setLatitude] = useState(-24.784);
const [longitude, setLongitude] = useState(-169.3637);
const navigate = useNavigate();
const {id} = useParams();
const [valuesSet, setStatus] = useState(false);


useEffect(()=>{
if((id !== undefined) && (valuesSet===false)){
    const contact = contacts.filter(element => element.id == id)
    contact[0].firstName !== undefined ? setFirstName(contact[0].firstName):console.log(contact[0]);
    contact[0].lastName !== undefined ? setLastName(contact[0].lastName):console.log(contact[0]);
    contact[0].street !== undefined ? setStreet(contact[0].street):console.log(contact[0]);
    contact[0].city !== undefined ? setCity(contact[0].city):console.log(contact[0]);
    contact[0].gender !== undefined ? setGender(contact[0].gender):console.log(contact[0]);
    contact[0].email !== undefined ? setEmail(contact[0].email):console.log(contact[0]);
    contact[0].jobTitle !== undefined ? setJobTitle(contact[0].jobTitle):console.log(contact[0]);
    contact[0].favouriteColour !== undefined ? setfavColour(contact[0].favouriteColour):console.log(contact[0]);
    contact[0].profileImage !== undefined ? setImage(contact[0].profileImage):console.log(contact[0].favouriteColour);
    contact[0].latitude !== undefined ? setLatitude(contact[0].latitude):console.log(contact[0]);
    contact[0].longitude !== undefined ? setLongitude(contact[0].longitude):console.log(contact[0]);

    setStatus(true);
}

},[])


    let submit = (e)=>{
        e.preventDefault()
        const contact = {firstName:Capitilize(firstName), lastName:Capitilize(lastName), street:Capitilize(street), city:Capitilize(city),profileImage, gender,email, jobTitle, latitude, longitude, favouriteColour};
        if(id){
        contact.id = id
        saveContact(contact)
        navigate("/view/"+id);
    }else{
        saveContact(contact);
        navigate("/");
        }
    }

    console.log(favouriteColour)

    function Capitilize(inputString){
        return inputString?inputString[0].toUpperCase()+ inputString.substring(1):"";
    }

    return (<> <Header title={divTitle}/>
        <div className="formDiv"><form className="form" onSubmit={(e)=> submit(e)} > 
          <label>First Name:</label><br></br><input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event)=> setFirstName(event.target.value)}/><br></br>
            <label>Last Name</label><br></br><input type="text"
            name="lastName"
            value={lastName}
            onChange={(event)=> setLastName(event.target.value)}/><br></br>
            <label>Street</label><br></br><input type="text"
            name="street"
            value={street}
            onChange={(event)=> setStreet(event.target.value)}/><br></br>
             <label>City</label><br></br><input type="text"
            name="city"
            value={city}
            onChange={(event)=> setCity(event.target.value)}/><br></br>
             <label>Gender</label><br></br><input type="text"
            name="gender"
            value={gender}
            onChange={(event)=> setGender(event.target.value)}/><br></br>
             <label>Email</label><br></br><input type="text"
            name="email"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}/><br></br>
             <label>Job Title</label><br></br><input type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={(event)=> setJobTitle(event.target.value)}/><br></br>
             <label>Favourite Colour</label><br></br><input type="color"
            name="favouriteColour"
            value={favouriteColour}
            onChange={(event)=> setfavColour(event.target.value)}/><br></br>
             <label>Latitude</label><br></br><input type="text"
            name="latitude"
            value={latitude}
            onChange={(event)=> setLatitude(event.target.value)}/><br></br>
            <label>Longitude</label><br></br><input type="text"
            name="longitude"
            value={longitude}
            onChange={(event)=> setLongitude(event.target.value)}/><br></br>
            <br></br><button className="form__submit" type="submit" value="Save contact" >Save</button>
      </form></div>
       </>
    );
}

export default ContactForm