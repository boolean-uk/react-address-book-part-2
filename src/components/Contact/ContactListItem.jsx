import { Link } from "react-router-dom"

export default function ContactListItem(props){
    const { firstName, lastName, id } = props.contact  
    
    return(
        <Link to={`/view/${id}`}>
            <li>{`${firstName} ${lastName}`}</li>
        </Link>
    )
}