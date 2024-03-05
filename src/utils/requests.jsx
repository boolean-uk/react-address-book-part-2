export const getContacts = async () => {
  try {
    const response = await fetch(
      "https://boolean-api-server.fly.dev/olemarkusroland/contact"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const postContact = async (contact, setContacts) => {
  fetch('https://boolean-api-server.fly.dev/olemarkusroland/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  })
  .then(response => response.json())
  .then(newContact => {
    setContacts(prevAnswers => [newContact, ...prevAnswers]);
  })
  .catch(error => console.error('Error adding new contact to https://boolean-api-server.fly.dev/olemarkusroland/contact: ', error));
}

export const putContact = async (contact, setContacts) => {
  fetch(`https://boolean-api-server.fly.dev/olemarkusroland/contact/${contact.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  })
  .then(response => response.json())
  .then(updatedContact => {
    setContacts(prevAnswers => prevAnswers.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
  })
  .catch(error => console.error(`Error updating contact with id ${contact.id} at https://boolean-api-server.fly.dev/olemarkusroland/contact/${contact.id}: `, error));
}

export const deleteContact = async (id, setContacts) => {
  fetch(`https://boolean-api-server.fly.dev/olemarkusroland/contact/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(() => {
    setContacts(prevAnswers => prevAnswers.filter(contact => contact.id !== id));
  })
  .catch(error => console.error(`Error deleting contact with id ${id} from https://boolean-api-server.fly.dev/olemarkusroland/contact/${id}: `, error));
}