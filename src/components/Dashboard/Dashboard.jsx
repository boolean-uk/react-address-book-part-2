import { useParams } from "react-router-dom";
import Menu from "../Menu";
import axios from 'axios';
import { useEffect, useState } from "react";
import Contact from "./Contact";

const Dashboard = (props) => {

    const {contacts, setContacts} = props ?? {};
    const [updatedContacts, setUpdatedContacts] = useState();
    

    const {username} = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://boolean-api-server.fly.dev/${username}/contact`);
                console.log(response.data);
                setContacts(response.data);
                setUpdatedContacts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
       
        fetchData();
  
    }, []);

    if(!updatedContacts) return <p>Loading...</p>


    return (
        <><Menu updatedContacts={updatedContacts} setUpdatedContacts={setUpdatedContacts} contacts={contacts}/>
        <div>Dashboard</div>
        {updatedContacts.map( (contact, index) =>
            <Contact contact={contact} key={index}/>
        )}
        </>
    );
}

export default Dashboard;