import { useContext, useEffect, useState, createContext } from 'react';
import { useParams } from "react-router-dom";
import { contactContext } from "../App";
import DeleteContact from './deleteContact';
import UpdateContact from './UpdateContact';
export const personContext = createContext();


export default function ContactInfo() {
    const { contacts } = useContext(contactContext)
    const [person, setPerson] = useState(null);
    const { UserId } = useParams();

    useEffect(() => {
        setPersonById();
    }, [UserId])


    const setPersonById = () => {
        const p = contacts.find((p) => {return p.id == UserId})
        setPerson(p)
    }

    return (
        <div>
            <personContext.Provider value={{ person: person }}>
                {/*<p>{person.firstName} {person.lastName}</p>*/}
                <p>City and street and stuff</p>
                <p>Id of this person is {UserId}</p>
                <DeleteContact></DeleteContact>
                <UpdateContact></UpdateContact>
            </personContext.Provider>
        </div>
    )
}