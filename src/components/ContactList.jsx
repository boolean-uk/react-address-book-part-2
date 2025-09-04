import { useContext } from "react";
import { ApiContext } from "../App";
import { useNavigate } from "react-router-dom";

function ContactList() {

    const {contacts} = useContext(ApiContext)
    const navigate = useNavigate();


        return (
        <>
        <h1>Contacts</h1>

        <table>
            <thead>
              <tr>
                <th></th>
                <th></th>

              </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>

                        <td onClick={() => navigate(`/contact/${contact.id}`)}>View</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
        </>
    );
}
export default ContactList