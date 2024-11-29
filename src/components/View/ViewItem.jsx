import { useNavigate } from "react-router-dom"
export default function ViewItem(props){
    const { remove } = props
    const { firstName, lastName, street, city, id, latitude, longitude } = props.contact
    const navigate = useNavigate()
    
    const handleUpdate = () => {
        navigate("/updatecontact", {state: {id: id}})
    }

    return(
        <div>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{`${street} ${city}`}</p>
            <button onClick={() => remove(id)}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
            <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&output=embed`}></iframe>
        </div>
    )
}