import { useNavigate } from "react-router-dom";

export default function ContactListItem({contact}){
    const {id} = contact 
    const navigate = useNavigate()

    const handleClick = (event) =>{
        navigate(`/view/${id}`)
    }
return(
<li onClick={handleClick} className="ContactListItem">
    <h3>{contact.firstName} {contact.lastName}</h3>
</li>
);
}