import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../../App'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const {people, URL, user, fetchData} = useContext(userContext);
    const id = useParams();
    const navigate = useNavigate();

    const [userById, setUser] = useState();

    const fetchUser = async () => {
        const findById = people.find(p => p.id === parseInt(id.id))
        console.log(id)
        setUser(findById)
    }
    useEffect(() => {
        fetchUser();
    }, [])

    const deleteUser = async (event) => {
            const response = await fetch(`${URL}/${user}/contact/${id.id}`, {
                method: 'DELETE',
            });
            console.log(response);
            fetchData()
            navigate('/dashboard')
    }

    if (!userById) return <p>loading...</p>

  return (
    <div>
      <h2>{userById.firstName} {userById.lastName}</h2>
      <p><b>City:</b> {userById.city}</p>
      <p><b>Street:</b> {userById.street}</p><br/>
      <p><Link to={`/dashboard/${id.id}/update`} state={{mode : "Update", contact : {userById}}}>Update User</Link></p>
      <button onClick={deleteUser}>Delete Contact</button>
    </div>
  )
}

export default UserProfile
