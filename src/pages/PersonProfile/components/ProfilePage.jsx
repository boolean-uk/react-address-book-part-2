import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ProfilePage(props) {
    console.log("Inside ProfilePage: ", { props });

    const [person, setPerson] = useState(null);
    const { contacts } = props
    const { id } = useParams();

    useEffect(()=>{
        setPerson(contacts.find(contact => Number(contact.id) === Number(id)));

    },[contacts, id])





    return (
        <div>
          <h2>Contact Profile</h2>
          { person ? (
              <div>
                <p>Name: {person.firstName} {person.lastName}</p>
                <p>City: {person.city}</p>
                <p>Street: {person.street}</p>
              </div>
            ) : (
              <p>No contact found</p>
            )
          }
        </div>
      );
      
}

export default ProfilePage;
