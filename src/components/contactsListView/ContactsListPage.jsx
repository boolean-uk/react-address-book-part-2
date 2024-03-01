import { useEffect } from "react";
import { ContactListItem } from "./ContactListItem";

export const ContactsListPage = ({ contacts, setContacts }) => {
  const fetchContacts = async () => {
    const result = await fetch(
      "https://boolean-api-server.fly.dev/LinusWillmont/contact"
    );
    const json = await result.json();
    return json;
  };

  const deleteAllContacts = async () => {
    const result = await fetch(
      "https://boolean-api-server.fly.dev/LinusWillmont/contact",
      { method: "DELETE" }
    );
    const json = await result.json();
    return json;
  };

  const handleReset = async () => {
    const result = await fetch(
      "https://boolean-api-server.fly.dev/LinusWillmont/admin",
      {
        method: "DELETE",
      }
    );
    const json = await result.json();
    return json;
  };

  const handleDeleteAll = async () => {
    await deleteAllContacts();
    setContacts([]);
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
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDeleteAll} className="deleteButton">
        Delete All
      </button>
      <ul>
        {contacts.map((contact) => {
          return (
            <ContactListItem
              key={contact.id}
              contact={contact}
              contacts={contacts}
              setContacts={setContacts}
            />
          );
        })}
      </ul>
    </>
  );
};
