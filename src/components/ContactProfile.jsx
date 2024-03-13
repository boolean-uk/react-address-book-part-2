import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ContactProfile(props){
    const {data} = props;

    const {id} = useParams();


    const [person, setPerson] = useState(null);

    useEffect(() => {
        if (data && id) {
        setPerson(data.find((aPeople) => Number(aPeople.id) === Number(id)));
        }
    }, [data, id]);

  console.log("hei",person)
  if (!person) return <p>Loading...</p>
    return(
        <div>
            <h1>Profile</h1>
            <p>{person.firstName} {person.lastName}</p>
            <p>{person.street}</p>
            <p>{person.city}</p>
        </div>
    )
}