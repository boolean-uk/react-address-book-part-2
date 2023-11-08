//UNTESTED DRAFT
import { useNavigate } from "react-router-dom";


export default function ContactsListItem(props) {
  const { contact, setReloadingNecessary } = props;

  const navigate = useNavigate();

  //That one is just a shot in the dark which I'm droppin here to be tested later, in case it actually works
  //we'd need to add contacts and setContacts to the props being passed
  const deleteContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${contact.id}`

    const options = {
      method: "DELETE"
    }

    fetch(baseURL + endpoint, options)
      .then(response => response.json())
      .then(() => setReloadingNecessary(true))
  }

  return (
    <>
      <li>
        <h3>
          {contact.firstName + " " + contact.lastName}
        </h3>
        {/*change line 8 based on what the routes are called in App.jsx*/}
        <button onClick={() => navigate("/profile")}>View</button>
        {/* commented out as it is an extension */}
        <button className="delete" onClick={deleteContact}>Delete</button>
      </li>
    </>
  );
}
