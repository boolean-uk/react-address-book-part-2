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
  .catch(error => console.error('Error adding new contact to https://boolean-api-server.fly.dev/olemarkusroland/contact:', error));
}