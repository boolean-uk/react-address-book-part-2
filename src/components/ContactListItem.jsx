//UNTESTED DRAFT
import { useNavigate } from "react-router-dom";


export default function ContactsListItem(props) {
  const { contact } = props;


  const navigate = useNavigate();

  //That one is just a shot in the dark which I'm droppin here to be tested later, in case it actually works
  //we'd need to add contacts and setContacts to the props being passed
  // const deleteContact = () => {
  //     const contactIndex = contacts.findIndex(c => c === contact)
  //     const updatedContacts = contacts.slice(contactIndex, 1)
  //     setContacts(updatedContacts)
  // }

  return (
    <>
      <li>
        <h3>
          {contact.firsName} + + {contact.lastName}
        </h3>
        {/*change line 8 based on what the routes are called in App.jsx*/}
        <button onClick={() => navigate("/profile")}>View</button>
        {/* commented out as it is an extension */}
        {/* <button onClick={deleteContact}>Delete</button> */}
      </li>
    </>
  );
}
