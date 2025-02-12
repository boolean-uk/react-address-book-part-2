import { Link } from "react-router-dom"

const Contact = ({contact}) => {

    return (
        <>
            <div className="container d-flex align-items-center justify-content-between p-2 border-bottom border-grey" >
                <h3 className="m-1">{contact.firstName} {contact.lastName} </h3>
                <Link to={`view/${contact.id}`} className="me-5">View</Link>
            </div>
        </>
    )
}

export default Contact
