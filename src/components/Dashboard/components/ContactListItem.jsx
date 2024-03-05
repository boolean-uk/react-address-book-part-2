
function ContactListItem ({ person }){
    return(
        <li className="contact">
            <h3>{person.firstName} {person.lastName}</h3>
            <button>View</button>
        </li>
    )
}

export default ContactListItem