import { useParams } from "react-router-dom";
import Menu from "../Menu";
import axios from 'axios';
import { useEffect, useState } from "react";
import Contact from "./Contact";
import '../../style/Dashboard.css';

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
        <>
        <div className="dashboard-container">
            
            <div className="dashboard-menu dashboard-items">
            <Menu updatedContacts={updatedContacts} setUpdatedContacts={setUpdatedContacts} contacts={contacts}/>
            </div>

            <div className="dashboard-content dashboard-items">
                <h1>Dashboard</h1>
                <div className="dashboard-contacts">
                {updatedContacts.map( (contact, index) =>
                    <>
                    <div className="dashboard-items">
                    <Contact contact={contact} key={index}/>
                    </div>
                    </>
                )}
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;