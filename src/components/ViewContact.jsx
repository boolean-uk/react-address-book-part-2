// import { useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"

// export default function ViewContact() {
// 	const [viewContact, setViewContact] = useState({})
// 	const contactId = Number(useParams().id)

// 	useEffect(() => {
// 		fetch("https://boolean-api-server.fly.dev/PerikK/contact")
// 			.then((response) => response.json())
// 			.then(setViewContact)
// 	}, [])

// 	return (
// 		<div className='view-contact'>
// 			<img src={viewContact.profileImage} />
// 			<h2> {viewContact.firstName} {viewContact.lastName}	</h2>
// 			<h3> {viewContact.city} </h3>
//             <h3> {viewContact.street} </h3>            
// 			<p>email: {viewContact.email}</p>
// 		</div>
// 	)
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewContact() {
    const [viewContact, setViewContact] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/PerikK/contact/${id}`)
            .then((response) => response.json())
            .then(setViewContact)
            .catch((error) => console.error("Error fetching contact:", error));
    }, [id]);

    return (
        <div className='view-contact'>
            <img src={viewContact.profileImage} alt={`${viewContact.firstName} ${viewContact.lastName}`} />
            <h2>{viewContact.firstName} {viewContact.lastName}</h2>
            <h3>{viewContact.city}</h3>
            <h3>{viewContact.street}</h3>
            <p>Email: {viewContact.email}</p>
        </div>
    );
}