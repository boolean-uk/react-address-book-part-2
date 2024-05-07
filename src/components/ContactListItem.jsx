import {Link} from 'react-router-dom'

function ContactListItem({contactItem:{firstName, lastName, id}}){

    return(
        <Link to={'/view/'+ id}><li id={id}>{firstName} {lastName}</li></Link>

    )
}

export default ContactListItem