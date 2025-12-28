import { useParams } from "react-router-dom";

function PersonProfile({data}) {
    const {id} = useParams();
    const person = data.find((p) => p.id === parseInt(id));
    return (
        <article>
        <h2>
            {person.firstName} {person.lastName}
        </h2>
        <p>
            
        {person.street}, {person.city}
                
        </p>
        
        </article>
    )
}

export default PersonProfile