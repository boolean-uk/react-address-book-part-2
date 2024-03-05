import { useParams } from "react-router-dom";
import ViewItem from "./ViewItem";

export default function View(props){
    const { id } = useParams()
    const { contacts, remove } = props
    
    const contact = contacts.find(p => p.id === Number(id));    
    if (!contact) return <p>Loading...</p>

    return(
        <ViewItem contact={contact} remove={remove}/>
    )
}