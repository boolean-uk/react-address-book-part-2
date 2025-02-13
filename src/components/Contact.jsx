import { Link } from 'react-router-dom';

function Contact(user) {
    return (
        <tr>
            <td>{user.user.firstName}</td>
            <td>{user.user.lastName}</td> 
            <button><Link to={`/contact/${user.user.id}`}>View</Link></button>
        
        </tr>
    )
}

export default Contact