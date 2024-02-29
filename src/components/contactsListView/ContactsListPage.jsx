import { useEffect, useState } from "react";
import { ContactListItem } from "./ContactListItem";

export const ContactsListPage = ({ contacts, setContacts }) => {
  const [deleteActive, setDeleteActive] = useState(false);

  const handleDelete = () => {
    setDeleteActive(!deleteActive);
  };

  const fetchContacts = async () => {
    const result = await fetch(
      "https://boolean-api-server.fly.dev/LinusWillmont/contact"
    );
    const json = await result.json();
    return json;
  };

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await fetchContacts();
      if (!ignore) {
        setContacts(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [setContacts]);

  if (!contacts) return <p>Loading...</p>;

  return (
    <>
      <button
        onClick={handleDelete}
        className={deleteActive ? "deleteButton" : ""}
      >
        Delete mode
      </button>
      <ul>
        {contacts.map((contact) => {
          return (
            <ContactListItem
              key={contact.id}
              contact={contact}
              contacts={contacts}
              setContacts={setContacts}
              deleteActive={deleteActive}
            />
          );
        })}
      </ul>
    </>
  );
};
