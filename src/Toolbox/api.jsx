// api.js
const URL = "https://boolean-api-server.fly.dev/thegrevling/contact";

export const fetchContacts = () => {
  return fetch(URL).then((res) => res.json());
};

export const createContact = async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
  }

  console.log('Form submitted successfully!');
  return fetchContacts();
};
