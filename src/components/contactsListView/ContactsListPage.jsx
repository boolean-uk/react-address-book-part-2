import { useEffect, useState } from "react";
import { ContactListItem } from "./ContactListItem";
import { ContactListFilter } from "./ContactListFilter";

export const ContactsListPage = ({ contacts, setContacts }) => {
  const [filter, setFilter] = useState({ firstName: "", lastName: "" });
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

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName
        .toLowerCase()
        .includes(filter.firstName.toLowerCase()) &&
      contact.lastName.toLowerCase().includes(filter.lastName.toLowerCase())
  );

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
      <ContactListFilter filter={filter} setFilter={setFilter} />
      <ul>
        {filteredContacts.map((contact) => {
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
