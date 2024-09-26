const BASE_URL = "https://boolean-api-server.fly.dev";

const addContact = async (contactData) => {
  const response = await fetch(`${BASE_URL}/Enock97/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  return await response.json();
};

const getAllContacts = async () => {
  const response = await fetch(`${BASE_URL}/Enock97/contact`);
  return await response.json();
};

const deleteAllContacts = async () => {
  const response = await fetch(`${BASE_URL}/Enock97/contact`, {
    method: "DELETE",
  });
  return await response.json();
};

const findContactById = async (contactId) => {
  const response = await fetch(`${BASE_URL}/Enock97/contact/${contactId}`);
  return await response.json();
};

const updateContact = async (contactId, contactData) => {
  const response = await fetch(`${BASE_URL}/Enock97/contact/${contactId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  return await response.json();
};

const deleteContact = async (contactId) => {
  const response = await fetch(`${BASE_URL}/Enock97/contact/${contactId}`, {
    method: "DELETE",
  });
  return await response.json();
};

export {
  addContact,
  getAllContacts,
  deleteAllContacts,
  findContactById,
  updateContact,
  deleteContact,
};
